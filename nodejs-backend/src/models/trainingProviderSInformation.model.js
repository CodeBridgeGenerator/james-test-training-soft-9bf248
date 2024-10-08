
    module.exports = function (app) {
        const modelName = 'training_provider_s_information';
        const mongooseClient = app.get('mongooseClient');
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            organizationName: { type: String, required: false, unique: false, lowercase: false, uppercase: false, minLength: 2, maxLength: 1000, index: true, trim: true },
organizationAddress: { type: String, required: false, unique: false, lowercase: false, uppercase: false, minLength: 2, maxLength: 1000, index: true, trim: true },
organizationContactNumber: { type: Number, required: false, min: 0, max: 2345678901 },

            
            createdBy: { type: Schema.Types.ObjectId, ref: "users", required: true },
            updatedBy: { type: Schema.Types.ObjectId, ref: "users", required: true }
          },
          {
            timestamps: true
        });
      
       
        if (mongooseClient.modelNames().includes(modelName)) {
          mongooseClient.deleteModel(modelName);
        }
        return mongooseClient.model(modelName, schema);
        
      };