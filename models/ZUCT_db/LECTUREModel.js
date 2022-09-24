import LECTUREModelGenerated from "./generated/LECTUREModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = LECTUREModelGenerated.init();
  
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
      return await LECTUREModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...LECTUREModelGenerated,
  ...customModel
};
