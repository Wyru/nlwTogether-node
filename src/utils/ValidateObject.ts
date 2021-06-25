import { ObjectSchema, ValidationError } from "yup";
import { ObjectShape } from "yup/lib/object";

interface IValidationResult {
  isValid: boolean;
  message?: string;
}

class ValidateObject {
  static execute(data: any, schema: ObjectSchema<ObjectShape>): IValidationResult {
    try {
      schema.validateSync(data);
      return {
        isValid: true
      }
    } catch (error) {
      if (error instanceof ValidationError) {
        return {
          isValid: false,
          message: error.message
        }
      }
      throw error;
    }
  }
}

export {
  ValidateObject
}