import { SafeAreaView, View, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { styles } from '../styles';

// Import components
import Subtitle from '../../components/subtitle';
import InputFieldSocial from '../../components/input-field-social';
import AddFriendButton from '../../components/add-friend-button'; 
import FriendDetailItem from '../../components/friend-detail-item';
import EditFriendsButton from '../../components/edit-friends-button';
import FriendDeleteButton from '../../components/friend-delete-button';

export default function SocialPage() {
  const [friends, setFriends] = useState(["Friend 1", "Friend 2"]);
  const [isEditing, setIsEditing] = useState(false);

  const deleteFriend = (friend) => {
    setFriends(friends.filter(f => f !== friend));
  };

  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.socialInputContainer}>
        <InputFieldSocial 
          placeholder="Username"
          keyboardType="default"
        />
        <AddFriendButton />
      </View>
      <EditFriendsButton onPress={toggleEditMode} />
      <Subtitle title="Friends List" />

      <FriendList friends={friends} deleteFriend={deleteFriend} isEditing={isEditing} />
    </SafeAreaView>
  );
}

const FriendList = ({ friends, deleteFriend, isEditing }) => {
  return (
    <>
      {friends.map((friend, index) => (
        <View key={index} style={styles.friendItem}>
          <FriendDetailItem username={friend} />
          {isEditing && (
            <FriendDeleteButton onPress={() => deleteFriend(friend)} />
          )}
        </View>
      ))}
    </>
  );
}
