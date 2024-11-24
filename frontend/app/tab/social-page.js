import React, { useState } from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import InputFieldSocial from '../../components/social-components/input-field-social';
import AddFriendButton from '../../components/social-components/add-friend-button';
import FriendDetailItem from '../../components/social-components/friend-detail-item';
import EditFriendsButton from '../../components/social-components/edit-friends-button';
import Subtitle from '../../components/general-use-components/subtitle';
import withDarkMode from '../../components/settings-components/with-dark-mode'; // Import the HOC
import { styles } from '../styles'; // Import global styles

function SocialPage({ isDarkMode }) { // Receive isDarkMode as a prop
  const [friends, setFriends] = useState(["Friend 1", "Friend 2"]);
  const [isEditing, setIsEditing] = useState(false);

  const deleteFriend = (friend) => {
    setFriends(friends.filter(f => f !== friend));
  };

  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  return (
    <SafeAreaView style={[styles.container, isDarkMode && styles.darkContainer]}>
      <View style={localStyles.socialInputContainer}>
        <InputFieldSocial 
          placeholder="Username"
          keyboardType="default"
          style={localStyles.inputField}
        />
        <AddFriendButton style={localStyles.addButton}/>
      </View>
      <View style={localStyles.editButtonContainer}>
        <EditFriendsButton onPress={toggleEditMode} />
      </View>
      <Subtitle title="Friends List" />
      <FriendList friends={friends} deleteFriend={deleteFriend} isEditing={isEditing} />
    </SafeAreaView>
  );
}

const FriendList = ({ friends, deleteFriend, isEditing }) => {
  return (
    <View>
      {friends.map(friend => (
        <FriendDetailItem 
          key={friend}
          friend={friend}
          isEditing={isEditing}
          deleteFriend={deleteFriend}
        />
      ))}
    </View>
  );
};

const localStyles = StyleSheet.create({
  socialInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  inputField: {
    flex: 1,
  },
  addButton: {
    marginLeft: 10,
  },
  editButtonContainer: {
    alignItems: 'flex-end',
    margin: 10,
  },
});

export default withDarkMode(SocialPage);