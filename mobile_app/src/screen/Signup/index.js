import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
const { width, height } = Dimensions.get("window");

function Signup(props) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  console.log(width, height);

  const signup = () => {
    axios.post("/auth/register",{}).then(()=>{
      
    })
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginView}>
        <View>
          <Image
            source={require("../../assets/logo.png")}
            style={{ width: "100%", resizeMode: "contain", height: 100 }}
          />
        </View>
        <TextInput
          placeholder="First Name"
          value={username}
          keyboardType="name-phone-pad"
          style={{ width: "100%" }}
          style={styles.input}
          onChangeText={setUsername}
        />
        <TextInput
          placeholder="Last Name"
          value={username}
          keyboardType="name-phone-pad"
          style={{ width: "100%" }}
          style={styles.input}
          onChangeText={setUsername}
        />
        <TextInput
          placeholder="Email"
          value={username}
          keyboardType="email-address"
          style={{ width: "100%" }}
          style={styles.input}
          onChangeText={setUsername}
        />
        <TextInput
          placeholder="Password"
          value={password}
          style={styles.input}
          onChangeText={setPassword}
          secureTextEntry
        />
        {/* <Button
          title="Sign in"
          style={styles.signInButton}
          color="#000"
          onPress={() => signIn({ username, password })}
        /> */}
        <TouchableOpacity>
          <View style={styles.signInButton}>
            <Text style={{ color: "#fff", textAlign: "center" }}>SIGN UP</Text>
          </View>
        </TouchableOpacity>

        {/* <TouchableOpacity onPress={()=>props.navigation.push("signup")}>
          <View style={styles.signUpButton}>
            <Text style={{ color: "#fff", textAlign: "center" }}>SIGN UP</Text>
          </View>
        </TouchableOpacity> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    alignItems: "center",
    justifyContent: "center",
  },
  loginView: {
    // maxWidth: 600,
    // borderWidth: 1,
    // borderColor: "#000",
    padding: 15,
    width: "100%",
    maxWidth: width > 400 ? 380 : null,
  },
  input: {
    marginBottom: 10,
    // width: 350,
    // maxWidth: 350,
    width: "100%",
    // maxWidth:
    backgroundColor: "#fff",
    padding: 8,
    fontSize: 18,
    borderRadius: 3,
    borderColor: "#ccc",
    borderWidth: 1,
    // width: '100%'
  },
  image: {
    resizeMode: "contain",
    width: "100%",
    height: "100%",
  },
  signInButton: {
    fontSize: 18,
    backgroundColor: "#000",
    padding: 12,
    borderRadius: 3,
    color: "#fff",
    marginBottom: 10,
    textAlign: "center",
  },
  signUpButton: {
    fontSize: 18,
    backgroundColor: "#ec8e2a",
    padding: 12,
    borderRadius: 3,
    color: "#fff",
    marginBottom: 10,
    textAlign: "center",
  },
});

export default Signup;
