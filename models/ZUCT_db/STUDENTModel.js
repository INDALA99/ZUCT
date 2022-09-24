import STUDENTModelGenerated from "./generated/STUDENTModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = STUDENTModelGenerated.init();
  
      schema.add({
        extraCustomField: Object
      });
    },
     
   */


  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await STUDENTModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...STUDENTModelGenerated,
  ...customModel
};
