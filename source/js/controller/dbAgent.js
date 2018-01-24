import mysql from "mysql";
import Config from "@/config.json";
import queryList from "@/queryList";
import _ from 'lodash'

export default class DbAgent {
	constructor() {
		this.queryList = queryList;
		this.pool = mysql.createPool(Config.db);
	}

	getConnection(query, data = []) {
		return new Promise((resolve, reject) => {
			this.pool.getConnection((err, connection) => {
				// Handle error after connection.
				if (err) reject(err);

				// Use the connection
				connection.query(query, data, (error, results) => {
					// And done with the connection.
					connection.release();

					// Handle error after the release.
					if (error) reject(error);
					// console.log(results, fields)
					resolve(results);

					// Don't use the connection here, it has been returned to the pool.
				});
			});
		});
	}
	query(queryName, data = []) {
		const isAviable = this.isAviableQuery(queryName, data);
		// console.log(queryName, data)
		return new Promise((resolve, reject) => {
			if (isAviable === true) {
				this.getConnection(this.queryList[queryName], data)
					.then(resolve)
					.catch(error => {
						reject({
							type: queryName,
							err: error
						});
					});
			} else
				reject({
					type: queryName,
					err: isAviable
				});
		});
	}

	isAviableQuery(type, data) {
		let result = _.has(this.queryList, type) || "Unsupported query";
		result =
			_.isArray(data) || `Arguments must be in array. Received ${typeof data}.`;
		return result;
	}

	closeConnection() {
		this.pool.end(err => {
			// all connections in the pool have ended
			console.log(`DbAgent->closeConnection(): ${err}`);
		});
	}
}
