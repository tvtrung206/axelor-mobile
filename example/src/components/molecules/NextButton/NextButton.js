import React from 'react';
import {Dimensions, StyleSheet, TouchableOpacity} from 'react-native';
import {Card, Icon, Text} from '@/components/atoms';
import {useThemeColor} from '@/features/themeSlice';
import useTranslator from '@/hooks/use-translator';

const NextButton = ({style, onPress = () => {}}) => {
  const Colors = useThemeColor();
  const I18n = useTranslator();

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.9}>
      <Card style={[styles.container, style]}>
        <Text style={styles.text} numberOfLines={2}>
          {I18n.t('Base_Next')}
        </Text>
        <Icon name="chevron-right" color={Colors.primaryColor} />
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width * 0.35,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 15,
    paddingVertical: 5,
    marginVertical: 4,
    marginRight: 16,
  },
  text: {
    textAlign: 'center',
  },
});

export default NextButton;