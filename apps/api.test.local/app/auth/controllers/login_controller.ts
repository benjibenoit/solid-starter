import User from '#users/models/user';
import type { HttpContext } from '@adonisjs/core/http';

export default class LoginController {
	async handle({ auth, request, response }: HttpContext) {
		const { email, password } = request.only(['email', 'password']);

		const user = await User.verifyCredentials(email, password);

		await auth.use('web').login(user);

		return response.noContent();
	}
}
