/* eslint-disable react/jsx-boolean-value */
/* eslint-disable global-require */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react';
import FlipCard from 'react-native-flip-card';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity, Linking, ScrollView, Image,
} from 'react-native';

export default class Coupons extends React.Component {
    static navigationOptions = {
      headerShown: false,

    }

      back = () => {
        this.props.navigation.navigate('Home');
      }

      info = () => {
        this.props.navigation.navigate(' ');
      }

      render() {
        return (

          <View style={styles.container}>

            <Text style={styles.title1}></Text>

            <TouchableOpacity style={styles.Btn1} onPress={this.back}>
              <Text style={styles.Bak}>Go Back</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.Btn2} onPress={this.info}>
              <Text style={styles.Bak}>i</Text>
            </TouchableOpacity>

            <Text style={styles.title}>Larry's Coupons 😏</Text>

            <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>

              <FlipCard>

                {/* Face Side */}
                <View style={styles.face}>

                  <Text style={styles.CPN_text}>Coupon 1</Text>

                </View>

                {/* Back Side */}
                <View style={styles.back}>
                  <Image source={{ uri: 'https://64.media.tumblr.com/e398646d5082c0fbed508fcbab99bb65/c705a5ba782e0feb-d6/s500x750/aeddac770761161e8540eb28ae8b121ba6ab8b40.gifv' }} style={{ width: 305, height: 200 }} />
                  <Text style={styles.CPN_text}>Play +5 STAR+ By CL on Spotify🔊</Text>

                  <TouchableOpacity
                    style={styles.CPN_1_Btn1}
                    onPress={() => Linking.openURL('https://open.spotify.com/track/0RB0E9wj4DjaFDOYPEMeps')}
                  >

                    <Text
                      style={styles.Bak}

                    >
                      Play Now!
                    </Text>

                  </TouchableOpacity>

                </View>

              </FlipCard>

              <FlipCard>
                {/* Face Side */}
                <View style={styles.face}>

                  <Text style={styles.CPN_text}>Coupon 2</Text>

                </View>

                {/* Back Side */}
                <View style={styles.back2}>

                  <Image source={{ uri: 'https://media1.tenor.com/images/3be04af037ef139044f7ff8dac40f92b/tenor.gif?itemid=5989495' }} style={{ width: 305, height: 250 }} />
                  <Text style={styles.CPN_text}>Choose What To Eat Anywhere😋</Text>
                </View>

              </FlipCard>

              <FlipCard>
                {/* Face Side */}
                <View style={styles.face}>

                  <Text style={styles.CPN_text}>Coupon 3</Text>

                </View>
                {/* Back Side */}

                <View style={styles.back3}>
                  <Image source={{ uri: 'https://media3.giphy.com/media/12XMGIWtrHBl5e/200.gif' }} style={{ width: 305, height: 250 }} />
                  <Text style={styles.CPN_text}>Larry has to make an embarrassing Video</Text>
                </View>

              </FlipCard>

              <FlipCard>
                {/* Face Side */}
                <View style={styles.face}>

                  <Text style={styles.CPN_text}>Coupon 4</Text>

                </View>
                {/* Back Side */}

                <View style={styles.back4}>
                  <Image source={{ uri: 'https://media4.giphy.com/media/jm4nsAWdCV4Lm/giphy.gif' }} style={{ width: 305, height: 250 }} />
                  <Text style={styles.CPN_text}>Win an Argument</Text>
                </View>

              </FlipCard>

              <FlipCard>
                {/* Face Side */}
                <View style={styles.face}>

                  <Text style={styles.CPN_text}>Coupon 5</Text>

                </View>
                {/* Back Side */}

                <View style={styles.back5}>
                  <Image source={{ uri: 'https://i.pinimg.com/originals/a0/3d/43/a03d430a6b5590203c21cd46b93bf445.gif' }} style={{ width: 305, height: 250 }} />
                  <Text style={styles.CPN_text}>Play Video Games</Text>
                </View>

              </FlipCard>

              <FlipCard>
                {/* Face Side */}
                <View style={styles.face}>

                  <Text style={styles.CPN_text}>Coupon 6</Text>

                </View>
                {/* Back Side */}

                <View style={styles.back6}>
                  <Image source={{ uri: 'https://66.media.tumblr.com/tumblr_mblbrsenhP1qkaczro5_250.gif' }} style={{ width: 305, height: 250 }} />
                  <Text style={styles.CPN_text}>Free Message</Text>
                </View>

              </FlipCard>

              <FlipCard>
                {/* Face Side */}
                <View style={styles.face}>

                  <Text style={styles.CPN_text}>Coupon 7</Text>

                </View>
                {/* Back Side */}

                <View style={styles.back7}>
                  <Image source={require('../assets/images/baby.jpeg')} style={{ width: 305, height: 200 }} />
                  <Text style={styles.CPN_text}>Look At Baby Album</Text>

                  <TouchableOpacity
                    style={styles.CPN_1_Btn1}
                    onPress={() => Linking.openURL('https://drive.google.com/drive/folders/1UQROAKcUi4hLYCmA_W5g_0Iefp16oR5N?usp=sharing')}
                  >

                    <Text
                      style={styles.Bak}

                    >
                      Open Now!
                    </Text>

                  </TouchableOpacity>
                </View>

              </FlipCard>

              <FlipCard>
                {/* Face Side */}
                <View style={styles.face}>

                  <Text style={styles.CPN_text}>Coupon 8</Text>

                </View>
                {/* Back Side */}

                <View style={styles.back8}>
                  <Image source={{ uri: 'https://www.xclusivetouch.co.uk/wp-content/uploads/2014/02/Clingy-Despicable-Me.gif' }} style={{ width: 305, height: 250 }} />
                  <Text style={styles.CPN_text}>#AnnoyLarry</Text>
                </View>

              </FlipCard>

              <FlipCard>
                {/* Face Side */}
                <View style={styles.face}>

                  <Text style={styles.CPN_text}>Coupon 9</Text>

                </View>
                {/* Back Side */}

                <View style={styles.back9}>
                  <Image source={{ uri: 'https://data.whicdn.com/images/202895583/original.gif' }} style={{ width: 305, height: 250 }} />
                  <Text style={styles.CPN_text}>Free Dessert</Text>
                </View>

              </FlipCard>

              <FlipCard>
                {/* Face Side */}
                <View style={styles.face}>

                  <Text style={styles.CPN_text}>Coupon 10</Text>

                </View>
                {/* Back Side */}

                <View style={styles.back10}>
                  <Image source={{ uri: 'https://media1.giphy.com/media/3o8dpbjJCW5eVmgUGQ/giphy.gif' }} style={{ width: 305, height: 250 }} />
                  <Text style={styles.CPN_text}>Be your Assistant for a Day</Text>
                </View>

              </FlipCard>
            </ScrollView>

          </View>
        );
      }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222222',
    alignItems: 'center',
    justifyContent: 'center',

  },
  Btn1: {
    top: 50,
    width: 100,
    height: 40,
    right: 130,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#777777',
    backfaceVisibility: 'hidden',
    borderRadius: 15,
  },

  Btn2: {
    top: 15,
    width: 30,
    height: 30,
    left: 150,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#777777',
    backfaceVisibility: 'hidden',
    borderRadius: 20,
  },
  scroll: {

    bottom: 40,
    flex: 1,
  },

  info: {
    top: 15,
    width: 30,
    height: 30,

    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#777777',
    backfaceVisibility: 'hidden',
    borderRadius: 20,
  },

  Bak: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  CPN_1_Btn1: {
    top: 50,
    width: 150,
    backgroundColor: '#1DB954',
    borderRadius: 15,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalToggle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
  },
  face: {
    width: 300,
    height: 420,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D7BE69',
    backfaceVisibility: 'hidden',
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
  },

  back: {
    marginBottom: 15,
    width: 300,
    height: 420,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DC143C',
    borderRadius: 15,

  },

  title: {
    bottom: 5,
    fontWeight: 'bold',
    fontSize: 50,
    color: '#FFFFFF',

    alignItems: 'center',
    justifyContent: 'center',
    padding: 35,
  },

  text: {

    width: 175,
    fontSize: 40,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
  },

  CPN_text: {
    width: 250,
    fontSize: 30,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
  },

  flipText1: {
    width: 100,
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },

  back2: {
    marginBottom: 15,
    width: 300,
    height: 420,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff7f7f',
    borderRadius: 15,

  },

  back3: {
    marginBottom: 15,
    width: 300,
    height: 420,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#333333',
    borderRadius: 15,

  },

  back4: {
    marginBottom: 15,
    width: 300,
    height: 420,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FEE12B',
    borderRadius: 15,

  },

  back5: {
    marginBottom: 15,
    width: 300,
    height: 420,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#770958',
    borderRadius: 15,

  },

  back6: {
    marginBottom: 15,
    width: 300,
    height: 420,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#C0EFF5',
    borderRadius: 15,

  },

  back7: {
    marginBottom: 15,
    width: 300,
    height: 420,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1dbbe3',
    borderRadius: 15,

  },

  back8: {
    marginBottom: 15,
    width: 300,
    height: 420,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#bfa0f8',
    borderRadius: 15,

  },

  back9: {
    marginBottom: 15,
    width: 300,
    height: 420,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#c7ffab',
    borderRadius: 15,

  },

  back10: {
    marginBottom: 15,
    width: 300,
    height: 420,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#cac5b5',
    borderRadius: 15,
  },

});
