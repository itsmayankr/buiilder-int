import { defineFeature, loadFeature } from 'jest-cucumber';
import { shallow, ShallowWrapper } from 'enzyme';

import * as helpers from '../../../../framework/src/Helpers';
import { runEngine } from '../../../../framework/src/RunEngine';
import { Message } from '../../../../framework/src/Message';

import MessageEnum, {
  getName,
} from '../../../../framework/src/Messages/MessageEnum';
import React from 'react';
import EmailAccountRegistration from '../../src/EmailAccountRegistration';
import SignUpPage1 from '../../src/SignUpPage1';
import SignUpPage2 from '../../src/SignUpPage2';
import { Modal } from 'react-native';
import { expect, jest, beforeEach } from '@jest/globals';

const navigation = require('react-navigation');

const screenProps = {
  navigation: {
    navigate: jest.fn(),
  },
  id: 'email-account-registration-scenario',
};

const SignUpPage1Props = {
  email: '',
  fullName: '',
  mobileNo: '9999999999',
  unFormattedMobileNo: '',
  password: '',
  confirmPasswoord: '',
  isValidPassword: true,
  isValidPasswordMatch: true,
  isConfirmPasswordVisible: false,
  isPasswordVisible: false,
  isValidMobileNo: true,
  onChangeEmail: () => jest.fn(),
  onChangeFullname: () => jest.fn(),
  onChangeMobileNo: () => jest.fn(),
  onChangeFormattedMobileNo: () => jest.fn(),
  onChangeUnformattedMobileNo: () => jest.fn(),
  onChangeIsValidMobileNo: () => jest.fn(),
  onChangeRegisterPassword: () => jest.fn(),
  handlePasswordVisibility: () => jest.fn(),
  onChangeConfirmPassword: () => jest.fn(),
  handleConfirmPasswordVisibility: () => jest.fn(),
  handleTermsAndConditionModal: () => jest.fn(),
};

const nagetiveSignUpPage1Props = {
  email: '',
  fullName: '',
  mobileNo: '9999999999',
  unFormattedMobileNo: '',
  password: '',
  confirmPasswoord: '',
  isValidPassword: false,
  isValidPasswordMatch: true,
  isConfirmPasswordVisible: true,
  isPasswordVisible: true,
  isValidMobileNo: false,
  onChangeEmail: () => jest.fn(),
  onChangeFullname: () => jest.fn(),
  onChangeMobileNo: () => jest.fn(),
  onChangeFormattedMobileNo: () => jest.fn(),
  onChangeUnformattedMobileNo: () => jest.fn(),
  onChangeIsValidMobileNo: () => jest.fn(),
  onChangeRegisterPassword: () => jest.fn(),
  handlePasswordVisibility: () => jest.fn(),
  onChangeConfirmPassword: () => jest.fn(),
  handleConfirmPasswordVisibility: () => jest.fn(),
  handleTermsAndConditionModal: () => jest.fn(),
};

const SignUpPage2Props = {
  countryDropdown: null,
  multiselect: null,
  country: null,
  onChangeItem: () => jest.fn(),
  regionDropdown: null,
  region: null,
  languageDropdown: null,
  language: null,
  midiaHouseDropdown: null,
  mediaHouse: null,
  categoryDropdown: null,
  categories: null,
};

const feature = loadFeature(
  './__tests__/features/email-account-registration-scenario.feature'
);

defineFeature(feature, (test) => {
  beforeEach(() => {
    jest.resetModules();
    jest.doMock('react-native', () => ({ Platform: { OS: 'ios' } }));
    jest.spyOn(helpers, 'getOS').mockImplementation(() => 'ios');
    jest.spyOn(runEngine, 'sendMessage');
  });

  test('Register Email Account SignupPage 1', ({ given, when, then }) => {
    let emailAccountRegistrationWrapperRegistration: ShallowWrapper;
    let SignUpPage1Wrapper: ShallowWrapper;
    let instance: EmailAccountRegistration;
    let instanceSignUpPage1: SignUpPage1;

    given('I am a User attempting to Register after confirming OTP', () => {
      emailAccountRegistrationWrapperRegistration = shallow(
        <EmailAccountRegistration {...screenProps} />
      );
      SignUpPage1Wrapper = shallow(<SignUpPage1 {...SignUpPage1Props} />);
      expect(emailAccountRegistrationWrapperRegistration).toBeTruthy();
      expect(SignUpPage1Wrapper).toBeTruthy();
    });

    when('I navigate to the Registration Screen', () => {
      instance = emailAccountRegistrationWrapperRegistration.instance() as EmailAccountRegistration;
      instanceSignUpPage1 = SignUpPage1Wrapper.instance() as SignUpPage1;
    });

    then('I can enter a email with out errors', () => {
      let textInputComponent = SignUpPage1Wrapper.findWhere(
        (node) => node.prop('testID') === 'txtInputEmail'
      );
      textInputComponent.simulate('changeText', 'demo@xyz.com');
      instance.onChangeEmail('demo@xyz.com');

      let buttonComponent = emailAccountRegistrationWrapperRegistration.findWhere(
        (node) => node.prop('testID') === 'Background'
      );
      buttonComponent.simulate('press');
    });

    then('I can enter a full name with out errors', () => {
      let textInputComponent = SignUpPage1Wrapper.findWhere(
        (node) => node.prop('testID') === 'txtInputFullName'
      );
      textInputComponent.simulate('changeText', 'Demo Name');
      instance.onChangeFullname('');
    });

    then('I can enter a mobile number with out errors', () => {
      Object.defineProperty(SignUpPage1.prototype, 'phoneInput', {
        get: jest.fn(() => {
          return {
            state: () => {
              number: '9999999999';
            },
            isValidNumber: jest.fn((ref: any) => {
              return true;
            }),
          };
        }),
      });
      let textInputComponent = SignUpPage1Wrapper.findWhere(
        (node) => node.prop('placeholder') === 'Mobile Number'
      );
      textInputComponent.simulate('changeText', '9999999999');
      instanceSignUpPage1.onChangeCountryCode('+91');
      instanceSignUpPage1.onBlurMobileNo();
      textInputComponent.simulate('blur');
      instance.onChangeMobileNo('9999999999');
      instance.onChangeFormattedMobileNo('9999999999');
      instance.onChangeUnformattedMobileNo('');
      instance.onChangeIsValidMobileNo(true);
    });

    then('I can enter a password with out errors', () => {
      let textInputComponent = SignUpPage1Wrapper.findWhere(
        (node) => node.prop('testID') === 'txtInputPassword'
      );
      textInputComponent.simulate('changeText', 'Demo@123');
      instance.onChangeRegisterPassword('');
      instance.onChangeRegisterPassword('Demo123');
      instance.onChangeRegisterPassword('Demo@123');
      instance.onChangeRegisterPassword('');
    });

    then('I can toggle the Password Show/Hide with out errors', () => {
      let buttonComponent = SignUpPage1Wrapper.findWhere(
        (node) => node.prop('testID') === 'btnPasswordShowHide'
      );
      buttonComponent.simulate('press');
      instance.handlePasswordVisibility();
      instance.onChangeRegisterPassword('Demo@123');
      instance.onChangeConfirmPassword('Demo@123');
      instance.onChangeConfirmPassword('Demo123');
      instance.onChangeConfirmPassword('');
    });

    then('I can enter a confimation password with out errors', () => {
      let textInputComponent = SignUpPage1Wrapper.findWhere(
        (node) => node.prop('testID') === 'txtInputConfirmPassword'
      );
      textInputComponent.simulate('changeText', 'Demo@123');
    });

    then(
      'I can toggle the Confimation Password Show/Hide with out errors',
      () => {
        let buttonComponent = SignUpPage1Wrapper.findWhere(
          (node) => node.prop('testID') === 'btnConfirmPasswordShowHide'
        );
        buttonComponent.simulate('press');
        instance.handleConfirmPasswordVisibility();
      }
    );

    then('I can see terms and condition', () => {
      let termsAndCondition = SignUpPage1Wrapper.findWhere(
        (node) => node.prop('testID') === 'btnTermsAndCondition'
      );
      termsAndCondition.simulate('press');
      instance.handleTermsAndConditionModal();
    });

    then('I can select the Submit button with out errors', () => {
      let buttonComponent = emailAccountRegistrationWrapperRegistration.findWhere(
        (node) => node.prop('testID') === 'NextButton'
      );
      buttonComponent.simulate('press');
      // cover all the cases abpove commented for the next button
      instance.onChangeEmail(''); // email is empty
      instance.onClickNext();
      instance.onChangeEmail('demo');
      instance.onClickNext();
      instance.onChangeEmail('Demo@123');
      instance.onChangeFullname('');
      instance.onClickNext();
      instance.onChangeEmail('Demo@123.com');
      instance.onChangeFullname('Demo');
      instance.onChangeRegisterPassword('');
      instance.onClickNext();
      instance.onChangeEmail('Demo@123.com');
      instance.onChangeFullname('Demo');
      instance.onChangeRegisterPassword('Demo@123');
      instance.onChangeConfirmPassword('');
      instance.onClickNext();
      instance.onChangeEmail('Demo@123.com');
      instance.onChangeFullname('Demo');
      instance.onChangeRegisterPassword('Demo@123');
      instance.onChangeConfirmPassword('Demo@123');
      instance.onClickNext();
    });

    then('I can navigate to SignupPage 2 with out errors', () => {
      instance.setState({ activeTab: 'SignUpPage2' });
      expect(instance.state.activeTab).toEqual('SignUpPage2');
    });

    then('I can leave the screen with out errors', () => {
      SignUpPage1Wrapper = shallow(
        <SignUpPage1 {...nagetiveSignUpPage1Props} />
      );
      instanceSignUpPage1 = SignUpPage1Wrapper.instance() as SignUpPage1;
      instance.componentWillUnmount();
      expect(emailAccountRegistrationWrapperRegistration).toBeTruthy();
    });
  });

  test('Register Email Account SignupPage 2', ({ given, when, then }) => {
    let emailAccountRegistrationWrapperRegistration: ShallowWrapper;
    let SignUpPage2Wrapper: ShallowWrapper;
    let instance: EmailAccountRegistration;
    let instanceSignUpPage2: SignUpPage2;

    given('I am a User attempting to Register after confirming OTP', () => {
      emailAccountRegistrationWrapperRegistration = shallow(
        <EmailAccountRegistration {...screenProps} />
      );
      SignUpPage2Wrapper = shallow(<SignUpPage2 {...SignUpPage2Props} />);
      expect(emailAccountRegistrationWrapperRegistration).toBeTruthy();
      expect(SignUpPage2Wrapper).toBeTruthy();
    });

    when('I navigate to the Registration Screen', () => {
      instance = emailAccountRegistrationWrapperRegistration.instance() as EmailAccountRegistration;
      instanceSignUpPage2 = SignUpPage2Wrapper.instance() as SignUpPage2;
    });

    then('I can go back to Signup page 1 screen with out errors', () => {
      let buttonComponent = SignUpPage2Wrapper.findWhere(
        (node) => node.prop('testID') === 'btnBack'
      );
      buttonComponent.simulate('press');
      instance.setState({ activeTab: 'SignUp2' });
    });

    then('I can select country dropdown with out errors', () => {
      let multiSelectComponent = SignUpPage2Wrapper.findWhere(
        (node) => node.prop('testID') === 'multiSelectCountry'
      );
      multiSelectComponent
        .props()
        .onChange(
          [0],
          { label: 'India', value: 1, id: '1', index: 0, isSelected: false },
          'country'
        );
      multiSelectComponent.props().renderItem({ item: 'India' });
      multiSelectComponent
        .props()
        .renderSelectedItem({ item: 'India' }, (item: any) => {
          true;
        })
        .props.onPress();
      instance.onChangeItem(
        [0],
        { label: 'India', value: 1, id: '1', index: 0, isSelected: true },
        'country'
      );
    });

    then('I can select region dropdown with out errors', () => {
      let multiSelectComponent = SignUpPage2Wrapper.findWhere(
        (node) => node.prop('testID') === 'multiSelectRegion'
      );
      multiSelectComponent.props().onChange(['East India']);
      multiSelectComponent.props().renderItem({ isSelected: true });
      multiSelectComponent
        .props()
        .renderSelectedItem({ item: 'East India' }, (item: any) => {
          true;
        })
        .props.onPress();
      instance.onChangeItem(
        [0],
        { label: 'East India', value: 1, id: '1', index: 0, isSelected: true },
        'region'
      );
    });

    then('I can select language dropdown with out errors', () => {
      let multiSelectComponent = SignUpPage2Wrapper.findWhere(
        (node) => node.prop('testID') === 'multiSelectLanguage'
      );
      multiSelectComponent.props().onChange(['English']);
      multiSelectComponent.props().renderItem({ item: 'English' });
      multiSelectComponent
        .props()
        .renderSelectedItem({ item: 'English' }, (item: any) => {
          true;
        })
        .props.onPress();
      instance.onChangeItem(
        [0, 1],
        { label: 'English', value: 1, id: '1', index: 0, isSelected: false },
        'language'
      );
    });

    then('I can select media house dropdown with out errors', () => {
      let multiSelectComponent = SignUpPage2Wrapper.findWhere(
        (node) => node.prop('testID') === 'multiSelectMediaHouse'
      );
      multiSelectComponent.props().onChange(['The Hindu']);
      multiSelectComponent.props().renderItem({ item: 'The Hindu' });
      multiSelectComponent
        .props()
        .renderSelectedItem({ item: 'The Hindu' }, (item: any) => {
          true;
        })
        .props.onPress();
      instance.onChangeItem(
        [0],
        { label: 'The Hindu', value: 1, id: '1', index: 0, isSelected: true },
        'media'
      );
    });

    then('I can select category dropdown with out errors', () => {
      let multiSelectComponent = SignUpPage2Wrapper.findWhere(
        (node) => node.prop('testID') === 'multiSelectCategory'
      );
      multiSelectComponent.props().onChange(['Sports']);
      multiSelectComponent.props().renderItem({ item: 'Sports' });
      multiSelectComponent
        .props()
        .renderSelectedItem({ item: 'Sports' }, (item: any) => {
          true;
        })
        .props.onPress();
      instance.onChangeItem(
        [0],
        { label: 'Sports', value: 1, id: '1', index: 0, isSelected: true },
        'category'
      );
      instance.setState({
        categoryDropdown: [
          { label: 'Sports', value: 1, id: '1', index: 0, isSelected: true },
        ],
      });
      instance.onChangeDropDownItem(
        [0, 1],
        { label: 'Sports', value: 2, id: '2', index: 0, isSelected: false },
        [{ label: 'Sports', value: 1, id: '1', index: 0, isSelected: false }],
        [1, 2]
      );
    });

    then(
      'I am receiving error message when am trying to register after some time',
      () => {
        const msg = new Message(getName(MessageEnum.RestAPIResponceMessage));

        msg.addData(
          getName(MessageEnum.RestAPIResponceDataMessage),
          msg.messageId
        );

        msg.addData(getName(MessageEnum.RestAPIResponceSuccessMessage), {
          errors: [{ token: 'invalid token' }],
        });
        instance.createAccountApiCallId = msg.messageId;
        runEngine.sendMessage('From unit test', msg);
      }
    );

    then(
      'I am receiving error message when am trying to register without email',
      () => {
        const msg = new Message(getName(MessageEnum.RestAPIResponceMessage));

        msg.addData(
          getName(MessageEnum.RestAPIResponceDataMessage),
          msg.messageId
        );

        msg.addData(getName(MessageEnum.RestAPIResponceSuccessMessage), {
          errors: [{ email: 'invalid email' }],
        });
        instance.createAccountApiCallId = msg.messageId;
        runEngine.sendMessage('From unit test', msg);
      }
    );

    then(
      'I am receiving error message when am trying to register without password',
      () => {
        const msg = new Message(getName(MessageEnum.RestAPIResponceMessage));

        msg.addData(
          getName(MessageEnum.RestAPIResponceDataMessage),
          msg.messageId
        );

        msg.addData(getName(MessageEnum.RestAPIResponceSuccessMessage), {
          errors: [{ password: 'invalid password' }],
        });
        instance.createAccountApiCallId = msg.messageId;
        runEngine.sendMessage('From unit test', msg);
      }
    );

    then('I am receiving error message when am trying to register', () => {
      const msg = new Message(getName(MessageEnum.RestAPIResponceMessage));

      msg.addData(
        getName(MessageEnum.RestAPIResponceDataMessage),
        msg.messageId
      );

      msg.addData(getName(MessageEnum.RestAPIResponceSuccessMessage), {
        errors: [{ message: 'error message' }],
      });
      instance.createAccountApiCallId = msg.messageId;
      runEngine.sendMessage('From unit test', msg);
    });

    then('I can leave the screen with out errors', () => {
      instance.componentWillUnmount();
      expect(emailAccountRegistrationWrapperRegistration).toBeTruthy();
    });
  });

  test('Network call mock test for registerApiCallId', ({
    given,
    when,
    then,
  }) => {
    let emailAccountRegistrationWrapperRegistration: ShallowWrapper;
    let instance: EmailAccountRegistration;

    given('I am a User attempting to Register with a Email', () => {
      emailAccountRegistrationWrapperRegistration = shallow(
        <EmailAccountRegistration {...screenProps} />
      );
      expect(emailAccountRegistrationWrapperRegistration).toBeTruthy();
    });

    when('I navigate to the Registration Screen', () => {
      instance = emailAccountRegistrationWrapperRegistration.instance() as EmailAccountRegistration;
    });

    then('I can Network call for registerApiCallId', () => {
      const msg = new Message(getName(MessageEnum.RestAPIResponceMessage));

      msg.addData(
        getName(MessageEnum.RestAPIResponceDataMessage),
        msg.messageId
      );

      msg.addData(getName(MessageEnum.RestAPIResponceSuccessMessage), {
        meta: {
          token: 'token',
        },
      });
      instance.registerApiCallId = msg.messageId;
      runEngine.sendMessage('From unit test', msg);
    });

    then(
      'I am facing errors with email while network call for registerApiCallId',
      () => {
        const msg = new Message(getName(MessageEnum.RestAPIResponceMessage));

        msg.addData(
          getName(MessageEnum.RestAPIResponceDataMessage),
          msg.messageId
        );

        msg.addData(getName(MessageEnum.RestAPIResponceSuccessMessage), {
          errors: [{ email: 'error' }],
        });
        instance.registerApiCallId = msg.messageId;
        runEngine.sendMessage('From unit test', msg);
      }
    );

    then(
      'I am facing errors with password while network call for registerApiCallId',
      () => {
        const msg = new Message(getName(MessageEnum.RestAPIResponceMessage));

        msg.addData(
          getName(MessageEnum.RestAPIResponceDataMessage),
          msg.messageId
        );

        msg.addData(getName(MessageEnum.RestAPIResponceSuccessMessage), {
          errors: [{ password: 'error' }],
        });
        instance.registerApiCallId = msg.messageId;
        runEngine.sendMessage('From unit test', msg);
      }
    );

    then(
      'I am facing errors with message while network call for registerApiCallId',
      () => {
        const msg = new Message(getName(MessageEnum.RestAPIResponceMessage));

        msg.addData(
          getName(MessageEnum.RestAPIResponceDataMessage),
          msg.messageId
        );

        msg.addData(getName(MessageEnum.RestAPIResponceSuccessMessage), {
          errors: [{ message: 'error' }],
        });
        instance.registerApiCallId = msg.messageId;
        runEngine.sendMessage('From unit test', msg);
      }
    );
  });

  test('Network call mock test for getCountryData', ({ given, when, then }) => {
    let emailAccountRegistrationWrapperRegistration: ShallowWrapper;
    let instance: EmailAccountRegistration;

    given('I am a User attempting to Register with a Email', () => {
      emailAccountRegistrationWrapperRegistration = shallow(
        <EmailAccountRegistration {...screenProps} />
      );
      expect(emailAccountRegistrationWrapperRegistration).toBeTruthy();
    });

    when('I navigate to the Registration Screen', () => {
      instance = emailAccountRegistrationWrapperRegistration.instance() as EmailAccountRegistration;
    });

    then('I can Network call for getCountryData', () => {
      const msg = new Message(getName(MessageEnum.RestAPIResponceMessage));

      msg.addData(
        getName(MessageEnum.RestAPIResponceDataMessage),
        msg.messageId
      );

      msg.addData(getName(MessageEnum.RestAPIResponceSuccessMessage), {
        data: [{ attributes: { name: 'India' } }],
      });
      instance.getCountryDataApicallId = msg.messageId;
      runEngine.sendMessage('From unit test', msg);
    });

    then(
      'I am facing errors with message while network call for getCountryData',
      () => {
        const msg = new Message(getName(MessageEnum.RestAPIResponceMessage));

        msg.addData(
          getName(MessageEnum.RestAPIResponceDataMessage),
          msg.messageId
        );

        msg.addData(getName(MessageEnum.RestAPIResponceSuccessMessage), {
          errors: [{ message: 'error' }],
        });
        instance.getCountryDataApicallId = msg.messageId;
        runEngine.sendMessage('From unit test', msg);
      }
    );
  });

  test('Network call mock test for getRegionData', ({ given, when, then }) => {
    let emailAccountRegistrationWrapperRegistration: ShallowWrapper;
    let instance: EmailAccountRegistration;

    given('I am a User attempting to Register with a Email', () => {
      emailAccountRegistrationWrapperRegistration = shallow(
        <EmailAccountRegistration {...screenProps} />
      );
      expect(emailAccountRegistrationWrapperRegistration).toBeTruthy();
    });

    when('I navigate to the Registration Screen', () => {
      instance = emailAccountRegistrationWrapperRegistration.instance() as EmailAccountRegistration;
    });

    then('I can Network call for getRegionData', () => {
      const msg = new Message(getName(MessageEnum.RestAPIResponceMessage));

      msg.addData(
        getName(MessageEnum.RestAPIResponceDataMessage),
        msg.messageId
      );

      msg.addData(getName(MessageEnum.RestAPIResponceSuccessMessage), {
        data: [{ attributes: { name: 'India' } }],
      });
      instance.getRegionDataApicallId = msg.messageId;
      runEngine.sendMessage('From unit test', msg);
    });

    then(
      'I am facing errors with message while network call for getRegionData',
      () => {
        const msg = new Message(getName(MessageEnum.RestAPIResponceMessage));

        msg.addData(
          getName(MessageEnum.RestAPIResponceDataMessage),
          msg.messageId
        );

        msg.addData(getName(MessageEnum.RestAPIResponceSuccessMessage), {
          errors: [{ message: 'error' }],
        });
        instance.getRegionDataApicallId = msg.messageId;
        runEngine.sendMessage('From unit test', msg);
      }
    );
  });

  test('Network call mock test for getLanguageData', ({
    given,
    when,
    then,
  }) => {
    let emailAccountRegistrationWrapperRegistration: ShallowWrapper;
    let instance: EmailAccountRegistration;

    given('I am a User attempting to Register with a Email', () => {
      emailAccountRegistrationWrapperRegistration = shallow(
        <EmailAccountRegistration {...screenProps} />
      );
      expect(emailAccountRegistrationWrapperRegistration).toBeTruthy();
    });

    when('I navigate to the Registration Screen', () => {
      instance = emailAccountRegistrationWrapperRegistration.instance() as EmailAccountRegistration;
    });

    then('I can Network call for getLanguageData', () => {
      const msg = new Message(getName(MessageEnum.RestAPIResponceMessage));

      msg.addData(
        getName(MessageEnum.RestAPIResponceDataMessage),
        msg.messageId
      );

      msg.addData(getName(MessageEnum.RestAPIResponceSuccessMessage), {
        data: [{ attributes: { name: 'India' } }],
      });
      instance.getLanguageDataApicallId = msg.messageId;
      runEngine.sendMessage('From unit test', msg);
    });

    then(
      'I am facing errors with message while network call for getLanguageData',
      () => {
        const msg = new Message(getName(MessageEnum.RestAPIResponceMessage));

        msg.addData(
          getName(MessageEnum.RestAPIResponceDataMessage),
          msg.messageId
        );

        msg.addData(getName(MessageEnum.RestAPIResponceSuccessMessage), {
          errors: [{ message: 'error' }],
        });
        instance.getLanguageDataApicallId = msg.messageId;
        runEngine.sendMessage('From unit test', msg);
      }
    );
  });

  test('Network call mock test for getMediaHouseData', ({
    given,
    when,
    then,
  }) => {
    let emailAccountRegistrationWrapperRegistration: ShallowWrapper;
    let instance: EmailAccountRegistration;

    given('I am a User attempting to Register with a Email', () => {
      emailAccountRegistrationWrapperRegistration = shallow(
        <EmailAccountRegistration {...screenProps} />
      );
      expect(emailAccountRegistrationWrapperRegistration).toBeTruthy();
    });

    when('I navigate to the Registration Screen', () => {
      instance = emailAccountRegistrationWrapperRegistration.instance() as EmailAccountRegistration;
    });

    then('I can Network call for getMediaHouseData', () => {
      const msg = new Message(getName(MessageEnum.RestAPIResponceMessage));

      msg.addData(
        getName(MessageEnum.RestAPIResponceDataMessage),
        msg.messageId
      );

      msg.addData(getName(MessageEnum.RestAPIResponceSuccessMessage), {
        data: [{ attributes: { name: 'India' } }],
      });
      instance.getMediaHouseDataApicallId = msg.messageId;
      runEngine.sendMessage('From unit test', msg);
    });

    then(
      'I am facing errors with message while network call for getMediaHouseData',
      () => {
        const msg = new Message(getName(MessageEnum.RestAPIResponceMessage));

        msg.addData(
          getName(MessageEnum.RestAPIResponceDataMessage),
          msg.messageId
        );

        msg.addData(getName(MessageEnum.RestAPIResponceSuccessMessage), {
          errors: [{ message: 'error' }],
        });
        instance.getMediaHouseDataApicallId = msg.messageId;
        runEngine.sendMessage('From unit test', msg);
      }
    );
  });

  test('Network call mock test for getCategoryData', ({
    given,
    when,
    then,
  }) => {
    let emailAccountRegistrationWrapperRegistration: ShallowWrapper;
    let instance: EmailAccountRegistration;

    given('I am a User attempting to Register with a Email', () => {
      emailAccountRegistrationWrapperRegistration = shallow(
        <EmailAccountRegistration {...screenProps} />
      );
      expect(emailAccountRegistrationWrapperRegistration).toBeTruthy();
    });

    when('I navigate to the Registration Screen', () => {
      instance = emailAccountRegistrationWrapperRegistration.instance() as EmailAccountRegistration;
    });

    then('I can Network call for getCategoryData', () => {
      const msg = new Message(getName(MessageEnum.RestAPIResponceMessage));

      msg.addData(
        getName(MessageEnum.RestAPIResponceDataMessage),
        msg.messageId
      );

      msg.addData(getName(MessageEnum.RestAPIResponceSuccessMessage), {
        data: [{ attributes: { name: 'India' } }],
      });
      instance.getCategoryDataApicallId = msg.messageId;
      runEngine.sendMessage('From unit test', msg);
    });

    then(
      'I am facing errors with message while network call for getCategoryData',
      () => {
        const msg = new Message(getName(MessageEnum.RestAPIResponceMessage));

        msg.addData(
          getName(MessageEnum.RestAPIResponceDataMessage),
          msg.messageId
        );

        msg.addData(getName(MessageEnum.RestAPIResponceSuccessMessage), {
          errors: [{ message: 'error' }],
        });
        instance.getCategoryDataApicallId = msg.messageId;
        runEngine.sendMessage('From unit test', msg);
      }
    );
  });

  test('Valid Registration', ({ given, when, then }) => {
    let emailAccountRegistrationWrapperRegistration: ShallowWrapper;
    let instance: EmailAccountRegistration;

    given('I am a User attempting to Register with a Email', () => {
      emailAccountRegistrationWrapperRegistration = shallow(
        <EmailAccountRegistration {...screenProps} />
      );
      expect(emailAccountRegistrationWrapperRegistration).toBeTruthy();
    });

    when('I Register with all valid data', () => {
      instance = emailAccountRegistrationWrapperRegistration.instance() as EmailAccountRegistration;
      instance.setState({ activeTab: 'SignUp2' });
      // instance.setState({firstName: "FIRST", lastName: "LAST", email: "a@b.com", password: "password123!!", reTypePassword: "password123!!"});
    });

    then('Registration Should Succeed', () => {
      let buttonComponent = emailAccountRegistrationWrapperRegistration.findWhere(
        (node) => node.prop('testID') === 'CreateAccountButton'
      );
      buttonComponent.simulate('press');
      instance.onClickCreateAccount();
      instance.setState({ countryIdArray: [{ id: 1, name: 'India' }] });
      instance.onClickCreateAccount();
      instance.setState({
        countryIdArray: [{ id: 1, name: 'India' }],
        regionIdArray: [{ id: 1, name: 'India' }],
      });
      instance.onClickCreateAccount();
      instance.setState({
        countryIdArray: [{ id: 1, name: 'India' }],
        regionIdArray: [{ id: 1, name: 'India' }],
        languageIdArray: [{ id: 1, name: 'India' }],
      });
      instance.onClickCreateAccount();
      instance.setState({
        countryIdArray: [{ id: 1, name: 'India' }],
        regionIdArray: [{ id: 1, name: 'India' }],
        languageIdArray: [{ id: 1, name: 'India' }],
        mediaHouseIdArray: [{ id: 1, name: 'India' }],
      });
      instance.onClickCreateAccount();
      instance.setState({
        countryIdArray: [{ id: 1, name: 'India' }],
        regionIdArray: [{ id: 1, name: 'India' }],
        languageIdArray: [{ id: 1, name: 'India' }],
        mediaHouseIdArray: [{ id: 1, name: 'India' }],
        categoryIdArray: [{ id: 1, name: 'India' }],
      });
      instance.onClickCreateAccount();
      //  expect(instance.createAccount()).toBe(true);
    });

    then('RestAPI will return token', () => {
      instance.apiCall({
        contentType: 'application/json',
        method: 'GET',
        endPoint: 'bx_block_location/countries',
        token: 'token',
        // body: apiData,
      });
      const msg = new Message(getName(MessageEnum.RestAPIResponceMessage));

      msg.addData(
        getName(MessageEnum.RestAPIResponceDataMessage),
        msg.messageId
      );

      msg.addData(getName(MessageEnum.RestAPIResponceSuccessMessage), {
        meta: { token: 'token' },
        data: { id: '1', name: 'India' },
      });
      instance.createAccountApiCallId = msg.messageId;
      runEngine.sendMessage('From unit test', msg);

      // const magLogInSucessRestAPI = new Message(getName(MessageEnum.RestAPIResponceMessage))
      // magLogInSucessRestAPI.addData(getName(MessageEnum.RestAPIResponceDataMessage), magLogInSucessRestAPI);
      // magLogInSucessRestAPI.addData(getName(MessageEnum.RestAPIResponceSuccessMessage), {
      //     "meta": {
      //         "token": "eyJhbGciOiJIUzUxMiJ9.eyJpZCI6MTAsInR5cGUiOiJTbXNBY2NvdW50IiwiZXhwIjoxNTc2Njk1ODk4fQ.kB2_Z10LNwDmbo6B39esgM0vG9qTAG4U9uLxPBYrCX5PCro0LxQHI9acwVDnfDPsqpWYvQmoejC2EO8MFoEz7Q"
      //     }
      // });
      // instance.createAccountApiCallId = magLogInSucessRestAPI.messageId
      // runEngine.sendMessage("Unit Test", magLogInSucessRestAPI)
    });

    then('I can close all popups', () => {
      // find all modals and call onRequestCall function of it
      emailAccountRegistrationWrapperRegistration
        .find(Modal)
        .forEach((modal) => {
          //@ts-ignore
          modal.props().onRequestClose();
        });
      emailAccountRegistrationWrapperRegistration.update();
      let buttonComponent = emailAccountRegistrationWrapperRegistration.findWhere(
        (node) => node.prop('testID') === 'modalCrossButton'
      );
      buttonComponent.simulate('press');
    });
  });
});
