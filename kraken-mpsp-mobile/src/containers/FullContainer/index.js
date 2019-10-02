import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
} from 'react-native';

const FullContainer = ({content}) => (
  <Fragment>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <View style={styles.body}>{content}</View>
      </ScrollView>
    </SafeAreaView>
  </Fragment>
);

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "gray",
  },
  body: {
    backgroundColor: "white",
  },
});

export default FullContainer;
