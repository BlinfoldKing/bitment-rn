import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Button,
  View,
  FlatList,
} from 'react-native';

import {
  GoalCard
} from '../components/GoalCard'

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  state = {
    dummy: [
      {
        id: 0,
        title: 'Kuliah Di standford',
        current: 10000,
        target: 20000,
        year: 2025
      }
    ]

  }
  addGoal = (title, target, year) => {
    console.log(title, target, year)
    this.setState({
      dummy: [
        ...this.state.dummy, {
          title,
          target,
          year,
          current: 0,
          id: this.state.dummy.length
        }
      ]
    })
  }
  render(props) {

    return (
      <View style={styles.container}>
        <ScrollView
          style={{
            ...styles.container,
            backgroundColor: '#EFF3F8'
          }}
          contentContainerStyle={styles.contentContainer}>
          <View style={{
            backgroundColor: '#4287f5',
            paddingHorizontal: 30,
            paddingVertical: 15
          }}>
            <View style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 50
            }}>
              <View>
                <Text style={{ color: 'white' }}>
                  Account Balance
            </Text>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>
                  Rp 3.000.000
            </Text>
              </View>
              <View>
                <Text style={{ color: 'white' }}>
                  Account Balance
            </Text>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>
                  Rp 3.000.000
            </Text>
              </View>
            </View>
            <View style={{
              backgroundColor: 'white',
              borderRadius: 5,
              padding: 15,
              marginTop: 10
            }}>
              <Text style={{
                color: '#4287f5',
                fontSize: 10
              }}>
                Total Investment Projection
            </Text>
              <Text style={{
                fontSize: 30,
                color: '#4287f5'
              }}>
                Rp 300.000.000.000
            </Text>
            </View>
          </View>
          <View>
            <View style={{
              padding: 10,
              paddingTop: 20,
            }}>
              <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
                <Text>
                  Saving Goals
              </Text>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('AddGoal', {
                    onSave: this.addGoal
                  })}
                >
                  <Text style={{
                    color: '#4287f5'
                  }}>
                    Add Goals
                </Text>
                </TouchableOpacity>
              </View>
              <FlatList
                data={this.state.dummy}
                renderItem={({ item }) => {
                  console.log(item)
                  return < GoalCard data={item} />
                }}
                keyExtractor={(item) => `${item.id}`}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

HomeScreen.navigationOptions = {
  title: 'Bitment',
  headerRight: <Button
    onPress={() => alert('This is a button!')}
    title="Pay"
    icon={() => (
      <Icon
        name="arrow-right"
        size={15}
        color="white"
      />
    )}
    style={{
      marginRight: 50,
      padding: 3,
      fontSize: 12
    }}
  />,
  headerStyle: {
    borderBottomWidth: 3,
    borderBottomColor: `#ffbb00`
  },


};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use
        useful development tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/development-mode/'
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});

