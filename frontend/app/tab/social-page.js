import { SafeAreaView, View, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { styles } from '../styles';
import Subtitle from '../../components/general-use-components/subtitle';
import InputFieldSocial from '../../components/social-components/input-field-social';
import AddFriendButton from '../../components/social-components/add-friend-button';
import FriendDetailItem from '../../components/social-components/friend-detail-item';
import EditFriendsButton from '../../components/social-components/edit-friends-button';
import FriendDeleteButton from '../../components/social-components/friend-delete-button';
import { DarkModeProvider, useDarkMode } from '../../components/settings-components/dark-mode-context';

function SocialPage() {
  const { isDarkMode } = useDarkMode();
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
        <InputFieldSocial placeholder="Username" keyboardType="default" style={localStyles.inputField} />
        <AddFriendButton style={localStyles.addButton} />
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
    <>
      {friends.map((friend, index) => (
        <View key={index} style={localStyles.friendItem}>
          <FriendDetailItem username={friend} />
          {isEditing && (
            <FriendDeleteButton onPress={() => deleteFriend(friend)} style={localStyles.deleteButton} />
          )}
        </View>
      ))}
    </>
  );
}



export const localStyles = StyleSheet.create({
  socialInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 15,
    paddingLeft: 15,
  },
  inputField: {
    flex: 3,
    borderColor: "black",
    borderRadius: 0,
    borderWidth: 2,
    padding: 7,
  },
  addButton: {
    flex:1,
  },
  editButtonContainer: {
    position: 'absolute',
    top: '9.8%', // Adjust as needed
    right: '4.5%', // Adjust as needed
    zIndex: 1, // Ensure it sits on top
  },
  friendItem: {
    flexDirection: 'row', // Arrange items in a row
    justifyContent: 'space-between', // Space between items
    alignItems: 'center', // Center items vertically
  },
  deleteButton: {
    paddingRight: 40, // Adjust this value to move the button further from the right side
  },
});

const App = () => (
  <DarkModeProvider>
    <SocialPage />
  </DarkModeProvider>
);

export default App;