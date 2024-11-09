import { PUBLIC_POCKETBASE_URL } from '$env/static/public';

import PocketBase, { type RecordModel } from 'pocketbase';

export const pb = new PocketBase(PUBLIC_POCKETBASE_URL);

export async function fetchCollection<T extends RecordModel>(collectionName: string): Promise<T[]> {
	try {
		const result = (await pb.collection(collectionName).getFullList()) as T[];
		return result;
	} catch (error) {
		console.error(`Failed to fetch records from ${collectionName}:`, error);
		throw error;
	}
}

export async function fetchRecord<T extends RecordModel>(
	collectionName: string,
	id: string
): Promise<T> {
	try {
		const record = await pb.collection(collectionName).getOne(id);
		return record as T;
	} catch (error) {
		console.error(`Failed to fetch record ${id} from ${collectionName}:`, error);
		throw error;
	}
}

export async function createRecord<T extends RecordModel>(collectionName: string, data: T) {
	try {
		const record = await pb.collection(collectionName).create(data);
		return record;
	} catch (error) {
		console.error(`Failed to create record in ${collectionName}:`, error);
		throw error;
	}
}

export async function updateRecord<T extends RecordModel>(
	collectionName: string,
	id: string,
	data: Omit<T, keyof RecordModel>
): Promise<T> {
	try {
		const record = await pb.collection(collectionName).update(id, data);
		return record as T;
	} catch (error) {
		console.error(`Failed to update record ${id} in ${collectionName}:`, error);
		throw error;
	}
}

export async function deleteRecord(collectionName: string, id: string): Promise<void> {
	try {
		await pb.collection(collectionName).delete(id);
	} catch (error) {
		console.error(`Failed to delete record ${id} in ${collectionName}:`, error);
		throw error;
	}
}
