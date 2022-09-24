// Import Mongoose
import mongoose from "mongoose";
// Logging
import Logger from "./Logger";
// Properties
import properties from "../properties.js";

// Start Import Models

import CourseModel from "../models/ZUCT_db/CourseModel";
import EnrollmentModel from "../models/ZUCT_db/EnrollmentModel";
import LECTUREModel from "../models/ZUCT_db/LECTUREModel";
import STUDENTModel from "../models/ZUCT_db/STUDENTModel";
import UserModel from "../models/ZUCT_db/UserModel";

// End Import Models

class Database {
  constructor() {}

  /**
   * Init database
   */
  async init() {
    await this.authenticate();
    Logger.info("MongoDB connected at: " + properties.ZUCT_db_dbUrl);

    // Start Init Models

		CourseModel.init();
		EnrollmentModel.init();
		LECTUREModel.init();
		STUDENTModel.init();
		UserModel.init();
 // End Init Models
  }

  /**
   * Start database connection
   */
  async authenticate() {
    Logger.info("Authenticating to the databases...");
    try {
      this.dbConnection_ZUCT_db = await mongoose.connect(
        "mongodb://" + properties.ZUCT_db_dbUrl,
        { useNewUrlParser: true }
      );
    } catch (err) {
      Logger.error(`Failed connection to the DB: ${err.message}`);
      Logger.error(err);
      await new Promise(resolve => setTimeout(resolve, 5000));
      await this.authenticate();
    }
  }

  /**
   * Get connection db
   */
  getConnection() {
    return this.dbConnection_ZUCT_db;
  }
}

export default new Database();
