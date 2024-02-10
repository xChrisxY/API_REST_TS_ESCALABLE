import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import UserModel from "../models/user";
import { encryptPassword, verifyPassword } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jwt.handle";

// Aquí es donde debe haber conexión directa con la base de datos

const registerNewUser = async ({ email, password, name } : User) => {

      const checkIs = await UserModel.findOne({ email });

      if (checkIs) return 'ALREADY_USER';

      // Creando contraseña encriptada
      const passwordHash = await encryptPassword(password);

      const registerNewUser = await UserModel.create({ email, password : passwordHash, name })

      return registerNewUser;

};

const loginUser = async ({ email, password} : Auth) => {

      const checkIs = await UserModel.findOne({ email });
      if (!checkIs) return 'NOT_FOUND_USER';

      const passwordHash = checkIs.password;

      const isCorrect = await verifyPassword(password, passwordHash);

      if (!isCorrect) return 'PASSWORD_INCORRECT';

      const token = await generateToken(checkIs.email);

      const data = {

            token,
            user : checkIs
      }

      return data;

};

export { registerNewUser, loginUser };