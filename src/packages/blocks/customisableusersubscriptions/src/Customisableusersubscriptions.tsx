import React from 'react';
// Customizable Area Start
import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
  ScrollView,
  FlatList,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';

import { backArrow, crown } from './assets';
import { AppHeader } from '../../../components/src/AppHeader';
import Scale from '../../../components/src/Scale';
import CheckIcon from 'react-native-vector-icons/Ionicons';
// Customizable Area End

import CustomisableusersubscriptionsController, {
  Props,
} from './CustomisableusersubscriptionsController';


export default class Customisableusersubscriptions extends CustomisableusersubscriptionsController {
  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    // Customizable Area End
  }

  renderTabs() {
    // #306EFF
    return (
      <View style={styles.switchTabView}>
        <TouchableOpacity
          style={[
            styles.tabView,
            {
              backgroundColor:
                this.state.activeTab == 'Subscription' ? 'blue' : '#fff',
            },
          ]}
          disabled={this.state.activeTab == 'Subscription' ? true : false}
          onPress={() => this.swithTab()}
        >
          <Text
            style={[
              styles.tabText,
              {
                color: this.state.activeTab == 'Subscription' ? '#fff' : '#000',
                opacity: this.state.activeTab == 'Subscription' ? 1 : 0.5,
              },
            ]}
          >
            Subscription plans
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabView,
            {
              backgroundColor:
                this.state.activeTab == 'History' ? 'blue' : '#fff',
            },
          ]}
          disabled={this.state.activeTab == 'History' ? true : false}
          onPress={() => this.swithTab()}
        >
          <Text
            style={[
              styles.tabText,
              {
                color: this.state.activeTab == 'History' ? '#fff' : '#000',
                opacity: this.state.activeTab == 'History' ? 1 : 0.5,
              },
            ]}
          >
            History
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  SubscriptionPlans = () => {
    return (
      <ScrollView style={styles.subscriptionScroll}>
        <View style={styles.premiumPlanView}>
          <View style={styles.crownView}>
            <Image source={crown} style={styles.crownImage} />
          </View>
          <View style={styles.textView}>
            <Text style={styles.premiumTxt}>Premium Plan</Text>
            <View style={styles.checkView}>
              <CheckIcon name='checkmark-sharp' color={'blue'} size={15} />
              <Text style={styles.descTxt}>Full content access</Text>
            </View>
            <View style={[styles.checkView, { bottom: 5 }]}>
              <CheckIcon name='checkmark-sharp' color={'blue'} size={15} />
              <Text style={styles.descTxt}>Can hear full article</Text>
            </View>
            <View style={[styles.checkView, { bottom: 0 }]}>
              <CheckIcon name='checkmark-sharp' color={'blue'} size={15} />
              <Text style={styles.descTxt}>No paywalls</Text>
            </View>
            <View style={[styles.checkView, { top: 5 }]}>
              <CheckIcon name='checkmark-sharp' color={'blue'} size={15} />
              <Text style={styles.descTxt}>No adds for premium user</Text>
            </View>
          </View>
          <TouchableOpacity
            style={[
              styles.plansView,
              { backgroundColor: this.state.annualPlan ? '#e6e6ff' : '#fff' },
            ]}
            onPress={() =>
              this.setState({
                annualPlan: !this.state.annualPlan,
                monthlyPlan: false,
              })
            }
          >
            <Text style={styles.annualText}>Annual Plan</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text
                style={[
                  styles.annualText,
                  { fontSize: Scale(18), fontWeight: 'bold' },
                ]}
              >
                $57.50
              </Text>
              <Text> </Text>
              <View
                style={[
                  styles.checkBox,
                  { backgroundColor: this.state.annualPlan ? 'blue' : '#fff' },
                ]}
              >
                <CheckIcon name='checkmark-sharp' size={15} color='#fff' />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.plansView,
              { backgroundColor: this.state.monthlyPlan ? '#e6e6ff' : '#fff' },
            ]}
            onPress={() =>
              this.setState({
                monthlyPlan: !this.state.monthlyPlan,
                annualPlan: false,
              })
            }
          >
            <Text style={styles.annualText}>Monthly Plan</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text
                style={[
                  styles.annualText,
                  { fontSize: Scale(18), fontWeight: 'bold' },
                ]}
              >
                $57.50
              </Text>
              <Text> </Text>
              <View
                style={[
                  styles.checkBox,
                  { backgroundColor: this.state.monthlyPlan ? 'blue' : '#fff' },
                ]}
              >
                <CheckIcon name='checkmark-sharp' size={15} color='#fff' />
              </View>
            </View>
          </TouchableOpacity>
          {this.state.annualPlan || this.state.monthlyPlan ? (
            <TouchableOpacity style={styles.saveBtn}>
              <Text style={styles.saveText}>PURCHASE</Text>
            </TouchableOpacity>
          ) : null}
        </View>
        <View
          style={[
            styles.premiumPlanView,
            {
              borderWidth: this.state.currentPlan == 'premium' ? 1 : 0,
              borderColor:
                this.state.currentPlan == 'premium' ? 'blue' : '#fff',
            },
          ]}
        >
          <View style={styles.preTrialPlanView}>
            <Text style={styles.premiumTrialTxt}>Premium Trial Plan</Text>
            {this.state.currentPlan == 'premium' && (
              <Text style={styles.currentPlanTxt}>Current Plan</Text>
            )}
          </View>
          <View style={styles.planDescView}>
            <View style={styles.checkView}>
              <CheckIcon name='checkmark-sharp' color={'blue'} size={15} />
              <Text style={styles.descTxt}>Full content access</Text>
            </View>
            <View style={[styles.checkView, { bottom: 5 }]}>
              <CheckIcon name='checkmark-sharp' color={'blue'} size={15} />
              <Text style={styles.descTxt}>Can hear full article</Text>
            </View>
            <View style={[styles.checkView, { bottom: 0 }]}>
              <CheckIcon name='checkmark-sharp' color={'blue'} size={15} />
              <Text style={styles.descTxt}>No paywalls</Text>
            </View>
            <View style={[styles.checkView, { top: 5 }]}>
              <CheckIcon name='checkmark-sharp' color={'blue'} size={15} />
              <Text style={styles.descTxt}>No adds for premium user</Text>
            </View>
          </View>
        </View>
        <View
          style={[
            styles.premiumPlanView,
            {
              borderWidth: this.state.currentPlan == 'free' ? 1 : 0,
              borderColor: this.state.currentPlan == 'free' ? 'blue' : '#fff',
            },
          ]}
        >
          <View style={styles.preTrialPlanView}>
            <Text style={[styles.premiumTrialTxt, { color: '#000' }]}>
              Free user
            </Text>
            {this.state.currentPlan == 'free' && (
              <Text style={styles.currentPlanTxt}>Current Plan</Text>
            )}
          </View>
          <View style={styles.planDescView}>
            <View style={styles.checkView}>
              <CheckIcon name='checkmark-sharp' color={'blue'} size={15} />
              <Text style={styles.descTxt}>
                Limitation of 5 articles per media house
              </Text>
            </View>
            <View style={[styles.checkView, { bottom: 5 }]}>
              <CheckIcon name='checkmark-sharp' color={'blue'} size={15} />
              <Text style={styles.descTxt}>Can hear full free article</Text>
            </View>
            <View style={[styles.checkView, { bottom: 0 }]}>
              <CheckIcon name='checkmark-sharp' color={'blue'} size={15} />
              <Text style={styles.descTxt}>Paywall per paywalls</Text>
            </View>
            <View style={[styles.checkView, { top: 5 }]}>
              <CheckIcon name='checkmark-sharp' color={'blue'} size={15} />
              <Text style={styles.descTxt}>Audio adds and Video/Image ads</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  };

  History = () => {
    return (
      <View style={styles.subscriptionScroll}>
        <FlatList
          style={{ marginTop: Scale(10) }}
          data={this.state.historyData}
          ItemSeparatorComponent={() => {
            return <View style={styles.lineView} />;
          }}
          renderItem={({ item, index }: { item: any; index: any }) => (
            (
              <TouchableOpacity style={styles.mainView}>
                <View style={styles.planView}>
                  <Text
                    style={
                      item.status == 'Active'
                        ? styles.premiumTrialTxt
                        : [styles.premiumTrialTxt, { color: '#000' }]
                    }
                  >
                    {item.planName}
                  </Text>
                  <Text
                    style={[
                      styles.currentPlanTxt,
                      {
                        color: this.getStatusColor(item.status),
                        textDecorationLine:
                          item.status == 'Active' ? 'underline' : 'none',
                      },
                    ]}
                  >
                    {item.status}
                  </Text>
                </View>
                <View style={styles.transactionView}>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontWeight: '500' }}>
                      {'Transaction ID :'}
                    </Text>
                    <Text>{' ' + item.transactionId}</Text>
                  </View>
                  <Text style={styles.amountTxt}>{item.amount}</Text>
                </View>
                <View style={styles.transactionView}>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontWeight: '500' }}>
                      {item.status == 'Active' ? 'Expiry Date :' : ''}
                    </Text>
                    <Text style={{ fontWeight: '500' }}>{item.expiryDate}</Text>
                  </View>
                  <Text style={{ fontWeight: '500' }}>{item.time}</Text>
                </View>
              </TouchableOpacity>
            )
          )}
        />
      </View>
    );
  };
  // Customizable Area Start
  // Customizable Area End

  render() {

    const { navigation } = this.props;
    return (
      // Customizable Area Start
      <View style={styles.container}>
        <AppHeader
          title={'Subscription'}
          back={backArrow}
          onPressBack={() => navigation.goBack()}
          menu={undefined}
          logo={undefined}
          search={undefined}
          bell={undefined}
          onPress={() => {}}
          onPressNotification={() => {}}
          onPressSearch={() => {}}
          searchScreen={false}
          backArrow={undefined}
        />
        {this.renderTabs()}
        {this.state.activeTab == 'Subscription' ? (
          <this.SubscriptionPlans />
        ) : (
          <this.History />
        )}
        <Modal
          animationType='fade'
          transparent={true}
          visible={this.state.subscriptionModal}
          onRequestClose={() => this.setState({ subscriptionModal: false })}
          onDismiss={() => this.setState({ subscriptionModal: false })}
        >
          <TouchableWithoutFeedback>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.choosePlanTxt}>Choose Your Plan</Text>
                <View style={styles.lineView} />
                <Text
                  style={[
                    styles.choosePlanTxt,
                    {
                      fontSize: Scale(14),
                      marginHorizontal: Scale(35),
                      marginTop: Scale(20),
                    },
                  ]}
                >
                  As a free trial user, You have exhausted your free
                  articles limite.{' '}
                </Text>
                <Text
                  style={[
                    styles.choosePlanTxt,
                    {
                      fontSize: Scale(14),
                      fontWeight: '600',
                      marginTop: Scale(20),
                    },
                  ]}
                >
                  Please subscribe to the Premium package to continue
                  listening the news articles.
                </Text>
                <TouchableOpacity
                  style={[
                    styles.plansView,
                    {
                      backgroundColor: this.state.annualPlan
                        ? '#e6e6ff'
                        : '#fff',
                      width: '85%',
                    },
                  ]}
                  onPress={() =>
                    this.setState({
                      annualPlan: !this.state.annualPlan,
                      monthlyPlan: false,
                    })
                  }
                >
                  <Text style={styles.annualText}>Annual Plan</Text>
                  <View
                    style={{ flexDirection: 'row', alignItems: 'center' }}
                  >
                    <Text
                      style={[
                        styles.annualText,
                        { fontSize: Scale(18), fontWeight: 'bold' },
                      ]}
                    >
                      $57.50
                    </Text>
                    <Text> </Text>
                    <View
                      style={[
                        styles.checkBox,
                        {
                          backgroundColor: this.state.annualPlan
                            ? 'blue'
                            : '#fff',
                        },
                      ]}
                    >
                      <CheckIcon
                        name='checkmark-sharp'
                        size={15}
                        color='#fff'
                      />
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.plansView,
                    {
                      backgroundColor: this.state.monthlyPlan
                        ? '#e6e6ff'
                        : '#fff',
                      width: '85%',
                    },
                  ]}
                  onPress={() =>
                    this.setState({
                      monthlyPlan: !this.state.monthlyPlan,
                      annualPlan: false,
                    })
                  }
                >
                  <Text style={styles.annualText}>Monthly Plan</Text>
                  <View
                    style={{ flexDirection: 'row', alignItems: 'center' }}
                  >
                    <Text
                      style={[
                        styles.annualText,
                        { fontSize: Scale(18), fontWeight: 'bold' },
                      ]}
                    >
                      $57.50
                    </Text>
                    <Text> </Text>
                    <View
                      style={[
                        styles.checkBox,
                        {
                          backgroundColor: this.state.monthlyPlan
                            ? 'blue'
                            : '#fff',
                        },
                      ]}
                    >
                      <CheckIcon
                        name='checkmark-sharp'
                        size={15}
                        color='#fff'
                      />
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.saveBtn}>
                  <Text style={styles.saveText}>PURCHASE</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </View>
      // Customizable Area End
    );
  }
}

const styles = StyleSheet.create({
  // Customizable Area Start
  container: {
    flex: 1,
    backgroundColor: '#ffffffff',
  },
  switchTabView: {
    backgroundColor: '#fff',
    marginHorizontal: Scale(20),
    flexDirection: 'row',
    marginTop: Scale(25),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tabView: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Scale(8),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: Scale(2),
    elevation: Scale(2),
    padding: Scale(13),
    width: '47%',
  },
  tabText: {
    fontSize: Scale(14),
    fontFamily: 'Roboto-Medium',
  },
  subscriptionScroll: {
    backgroundColor: '#fff',
    marginTop: Scale(20),
    flex: 1,
    marginBottom: Scale(20),
  },
  premiumPlanView: {
    marginHorizontal: Scale(20),
    backgroundColor: '#e6f2ff',
    marginTop: Scale(25),
    borderRadius: Scale(10),
    paddingBottom: 20,
  },
  crownView: {
    height: Scale(50),
    width: Scale(50),
    backgroundColor: '#e6f2ff',
    // backgroundColor:'red',
    borderRadius: Scale(30),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    bottom: Scale(25),
    right: Scale(20),
  },
  crownImage: {
    height: Scale(30),
    width: Scale(30),
  },
  textView: {
    marginHorizontal: Scale(20),
  },
  premiumTxt: {
    color: 'blue',
    bottom: Scale(25),
    fontSize: Scale(18),
    fontWeight: 'bold',
  },
  checkView: {
    flexDirection: 'row',
    alignItems: 'center',
    bottom: Scale(10),
  },
  descTxt: {
    left: Scale(10),
    fontWeight: '500',
  },
  plansView: {
    // backgroundColor: "#fff",
    flexDirection: 'row',
    padding: Scale(18),
    marginHorizontal: Scale(20),
    marginTop: Scale(20),
    borderRadius: Scale(10),
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  annualText: {
    fontWeight: 'bold',
  },
  checkBox: {
    height: Scale(18),
    width: Scale(18),
    borderRadius: Scale(10),
    borderWidth: 1,
    borderColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  saveBtn: {
    marginTop: Scale(30),
    width: '89%',
    borderRadius: 10,
    alignSelf: 'center',
    marginBottom: Scale(15),
    alignItems: 'center',
    backgroundColor: 'blue',
    padding: Scale(18),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  saveText: {
    fontWeight: '600',
    fontSize: Scale(16),
    color: '#fff',
  },
  preTrialPlanView: {
    flexDirection: 'row',
    marginHorizontal: Scale(20),
    justifyContent: 'space-between',
    marginTop: Scale(20),
    alignItems: 'center',
  },
  premiumTrialTxt: {
    color: 'blue',
    fontSize: Scale(18),
    fontWeight: 'bold',
  },
  planNameTxt: {},
  currentPlanTxt: {
    color: 'blue',
    fontSize: Scale(14),
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  planDescView: {
    marginHorizontal: Scale(20),
    marginTop: Scale(25),
  },

  // HISTORY SECTION STYLES //
  lineView: {
    borderWidth: 0.7,
    opacity: 0.1,
    elevation: 2,
    borderColor: '#000',
    marginVertical: Scale(10),
    marginHorizontal: Scale(20),
    width: '100%',
  },
  mainView: {
    backgroundColor: '#fff',
    marginHorizontal: Scale(20),
  },
  planView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  transactionView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Scale(10),
  },
  amountTxt: {
    fontWeight: 'bold',
  },

  // MODAL STYLES //
  centeredView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    // height: Scale(230),
    width: '85%',
    borderRadius: Scale(10),
    backgroundColor: 'white',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: Scale(5),
    paddingTop: Scale(10),
  },
  choosePlanTxt: {
    textAlign: 'center',
    fontWeight: '500',
    fontSize: Scale(18),
    marginTop: Scale(10),
  },

  // Customizable Area End
});

// Customizable Area Start
// Customizable Area End
