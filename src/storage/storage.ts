import AsyncStorage from '@react-native-async-storage/async-storage';

const TOKEN_KEY  = 'AUTH_TOKEN';

export const Storage = {
    async setToken(token : string){
        await AsyncStorage.setItem(TOKEN_KEY, token);
    },

    async getToken(){
        await AsyncStorage.getItem(TOKEN_KEY)
    },

    async removeeToken(){
        await AsyncStorage.removeItem(TOKEN_KEY);
    },

    async clearAll(){
        await AsyncStorage.clear();
    }
}