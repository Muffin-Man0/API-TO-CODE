const {
    quicktype,
    InputData,
    jsonInputForTargetLanguage,
    TypeScriptTargetLanguage,
    JSONSchemaInput,
    FetchingJSONSchemaStore
  } = require("quicktype-core");

  async function quicktypeJSONSchema(targetLanguage, typeName, jsonSchemaString) {
    const schemaInput = new JSONSchemaInput(new FetchingJSONSchemaStore());
  
 
    await schemaInput.addSource({ name: typeName, schema: jsonSchemaString });
  
    const inputData = new InputData();
    inputData.addInput(schemaInput);
  
    return await quicktype({
      inputData,
      lang: targetLanguage,
      rendererOptions: { 'just-types': 'true' }
    });
  }
  

const quickTypeJSON = async (targetLanguage, typeName, jsonString)=> {
  const jsonInput = jsonInputForTargetLanguage(targetLanguage);


  await jsonInput.addSource({
    name: typeName,
    samples: [jsonString],
  });

  const inputData = new InputData();
  inputData.addInput(jsonInput);

  return await quicktype({
    inputData,
    lang: targetLanguage,
    rendererOptions: { 'just-types': 'true' }
  });
}

module.exports = {
    quickTypeJSON,
    quicktypeJSONSchema
}
