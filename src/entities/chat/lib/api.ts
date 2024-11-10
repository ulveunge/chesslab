import type { Message } from '$shared/lib/types';
import { USER_ID } from '$entities/chat/lib/constants';

const messages: Message[] = [
	{
		id: '1',
		userId: '1',
		message: 'Hello world!',
	},
	{
		id: '1',
		userId: USER_ID,
		message: 'Hello world!',
	},
	{
		id: '1',
		userId: '1',
		message: 'Hello world!',
	}
]

export async function getMessages() {
	return messages;
}