import AsyncStorage from '@react-native-async-storage/async-storage'
import { GROUP_COLLECTION } from '@storage/storage.config';

export async function groupGetAll() {
  try {
    const storage = await AsyncStorage.getItem(GROUP_COLLECTION)

  //converte storage o json para um array de objetos ou caso não tenha nada, retorna um array vazio
  const groups: string[] = storage ? JSON.parse(storage) : []

  return groups
  } catch(error) {
    throw error
  }
}