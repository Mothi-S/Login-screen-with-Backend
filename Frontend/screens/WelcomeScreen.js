import React from 'react';
import {  View, 
          Text,
          StyleSheet,
          TouchableOpacity, 
          Pressable,
          Linking,
          Image} from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
   
    
    <View style={styles.container}>
    
      
      <Text style={styles.title}>Welcome to Limat Technology Solutions!</Text>
      
        <View style ={styles.buttoncontainer}>

            <TouchableOpacity 
                style={styles.button}
                onPress={()=> navigation.navigate('Login')}>

                <Text style={styles.buttonText}>Already have an Account? Login here!</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.navigate('Guest')}>
                <Text style={styles.buttonText}>Continue as Guest</Text>
            </TouchableOpacity>
        
        </View>

        <View style ={styles.textcontainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.signupText}>New? Register here!</Text>
          </TouchableOpacity>
        </View>


        <View style={styles.footer}>
            <Text style={styles.footerText}>Follow us on</Text>

            <View style={styles.socialLinks}>
              <Pressable onPress={() => Linking.openURL('https://www.facebook.com/limattechnologysolutions?mibextid=LQQJ4d')}>
                  <Text style={styles.socialText}>Facebook</Text>
              </Pressable>
              <Pressable onPress={() => Linking.openURL('https://x.com/limatsolutions?s=21')}>
                  <Text style={styles.socialText}>Twitter</Text>
              </Pressable>
              <Pressable onPress={() => Linking.openURL('https://www.instagram.com/limattechnologysolutions?igsh=MXVtOHBkMjd4YmJxdg==')}>
                  <Text style={styles.socialText}>Instagram</Text>
              </Pressable>
            </View>

            <Pressable onPress={() => Linking.openURL('mailto:info@liat-tech.com')}>
              <Text style={styles.contactText}>Contact Us</Text>
            </Pressable>

        </View>
    </View> 
 
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#d3d3d3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginTop:50,
    paddingBottom:40,
    fontSize: 22,
    fontWeight: 'bold',
    color:"black",

  },

  buttoncontainer:{
    flexDirection:"row",
    justifyContent: "space-between",   
    paddingTop:"40%",
    paddingBottom:10,
    marginTop:80,
  },
  
  button:{
    backgroundColor:"#191970",
    paddingVertical:10,
    justifyContent:'center',
    borderRadius:8,
    marginRight:10,
    width:150,


  },
  buttonText:{
    color:'#fff',
    textAlign:'center',
    fontWeight:'bold',
  },

  textcontainer:{
    justifyContent:'center',
    fontSize:20,
    paddingBottom:10,
    marginBottom:20,
  },

  signupText:{
    color:'#191970',
    marginBottom:30,
  },

  footer: {
    marginBottom: 30,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
    marginBottom: 10,
  },
  socialLinks: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
    marginBottom: 20,
  },
  socialText: {
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
    marginHorizontal: 10,
  },
  contactText: {
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
  }

});

export default WelcomeScreen;