import ProfileCard from './Profile/Profile';
import usersData from '../user.json';
import Statistic from './Statistics/Statistics';
import statsData from '../data.json';
import FriendList from './FriendList/FriendsList';
import friendsData from '../friends.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactionsData from '../transactions.json';

export const App = () => {
  return (
    <div>
      <ProfileCard
        username={usersData.username}
        tag={usersData.tag}
        location={usersData.location}
        avatar={usersData.avatar}
        stats={usersData.stats}
      />
      <Statistic stats={statsData} />
      <Statistic title="Upload stats" stats={statsData} />
      <FriendList friends={friendsData} />
      <TransactionHistory items={transactionsData} />
    </div>
  );
};
