import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

export default function App() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const user = {
    email: "cliente@teste.com",
    password: "123456"
  }

  function handleLogin() {
    if (email === user.email && password === user.password) {
      Alert.alert('Login', 'Login realizado com sucesso!')
    }

    if (email !== user.email || password !== user.password) {
      Alert.alert('Login', 'Falha no login!')
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.label}>Email:</Text>
        <TextInput 
          style={styles.input}
          placeholder='Digite seu email'
          onChangeText={setEmail}
          testID="input-email"
        />
        <Text style={styles.label}>Senha:</Text>
        <TextInput
          style={styles.input}
          placeholder='Digite sua senha'
          secureTextEntry
          onChangeText={setPassword}
          testID="input-pass"
        />
        <StatusBar style="auto" />
        <TouchableOpacity
          style={styles.button}
          onPress={handleLogin}
          testID="button-login"
        >
          <Text style={styles.buttonLabel}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

