/**
 * 
 * 
  _____                      _              _ _ _     _   _     _        __ _ _      
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |     
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___ 
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|
 
 * DO NOT EDIT THIS FILE!! 
 * 
 *  TO CUSTOMIZE CourseModelGenerated.js PLEASE EDIT ../CourseModel.js
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 * 
 */
// Database
import Database from "../../../classes/Database_ZUCT_db";
import mongoose, { Schema } from "mongoose";

// Logger
import Logger from "../../../classes/Logger";

const generatedModel = {
  /**
   * Init  schema
   */
  init() {
    const db = Database.getConnection();

    /**
      * Course
      */
    const courseSchema = new mongoose.Schema({
      C_lecture: {
        type: "String"
      },
      Course_ID: {
        type: "Number", 
        required: true
      },
      c_name: {
        type: "String"
      },
      // RELATIONS
      enrol: [{
        type: Schema.ObjectId,
        ref: "Enrollment"
      }],
      tutor: [{
        type: Schema.ObjectId,
        ref: "STUDENT"
      }],
      
      
      // EXTERNAL RELATIONS
      /*
      tutor: [{
        type: Schema.ObjectId,
        ref: "STUDENT"
      }],
      tutotr: [{
        type: Schema.ObjectId,
        ref: "Enrollment"
      }],
      */
    });

    generatedModel.setModel(db.connection.model("Course", courseSchema));

    return courseSchema;
  },

  /**
   * Set Model
   */
  setModel: model => {
    generatedModel.model = model;
  },

  /**
   * Get model
   */
  getModel: () => {
    return generatedModel.model;
  },

  // Start queries
    

  // CRUD METHODS


  /**
  * CourseModel.create
  *   @description CRUD ACTION create
  *
  */
  async create(item) {
    const obj = new generatedModel.model(item);
    return await obj.save();
  },
  
  /**
  * CourseModel.delete
  *   @description CRUD ACTION delete
  *   @param ObjectId id Id
  *
  */
  async delete(id) {
    return await generatedModel.model.findByIdAndRemove(id);
  },
  
  /**
  * CourseModel.findByenrol
  *   @description CRUD ACTION findByenrol
  *   @param Objectid key Id of model to search for
  *
  */
  async findByenrol(key) {
    return await generatedModel.model.find({ 'enrol' : key});
  },
  
  /**
  * CourseModel.findBytutor
  *   @description CRUD ACTION findBytutor
  *   @param Objectid key Id of model to search for
  *
  */
  async findBytutor(key) {
    return await generatedModel.model.find({ 'tutor' : key});
  },
  
  /**
  * CourseModel.get
  *   @description CRUD ACTION get
  *   @param ObjectId id Id resource
  *
  */
  async get(id) {
    return await generatedModel.model.findOne({ _id : id });
  },
  
  /**
  * CourseModel.list
  *   @description CRUD ACTION list
  *
  */
  async list() {
    return await generatedModel.model.find();
  },
  
  /**
  * CourseModel.update
  *   @description CRUD ACTION update
  *   @param ObjectId id Id
  *
  */
  async update(item) { 
    return await generatedModel.model.findOneAndUpdate({ _id: item._id }, item, {'new': true});
  },
  


};

export default generatedModel;
