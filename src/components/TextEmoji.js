import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import _ from 'underscore';
import Text from './Text';
import * as EmojiUtils from '../libs/EmojiUtils';
import * as StyleUtils from '../styles/StyleUtils';
import stylePropTypes from '../styles/stylePropTypes';
import styles from '../styles/styles';

const propTypes = {
    /** The message text to render */
    children: PropTypes.string.isRequired,

    /** The message text additional style */
    style: stylePropTypes,

    /** If TextEmoji was used in the menuItem component */
    isMenuItem: PropTypes.bool,
};

const defaultProps = {
    style: [],
};

const TextEmoji = (props) => {
    const words = EmojiUtils.getAllEmojiFromText(props.children);
    const propsStyle = StyleUtils.parseStyleAsArray(props.style);

    return _.map(words, ({text, isEmoji}, index) => (isEmoji ? (
        <View key={`${text}_${index}`}>
            <Text style={propsStyle}>
                {text}
            </Text>
        </View>
    )
        : (
            <View key={`${text}_${index}`} style={[!props.isMenuItem ? styles.messageTextWithoutEmoji : undefined]}>
                <Text>
                    {text}
                </Text>
            </View>
        )));
};

TextEmoji.displayName = 'TextEmoji';
TextEmoji.defaultProps = defaultProps;
TextEmoji.propTypes = propTypes;

export default TextEmoji;
