import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  textContainer: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  newMatchesContainer: {
    marginTop: 10,
    marginBottom: 20,
  },
  matchItem: {
    alignItems: 'center',
    marginRight: 5,
    marginLeft: 15,
  },
  matchImage: {
    width: 90,
    height: 110,
    borderRadius: 5,
  },
  matchUsername: {
    marginTop: 5,
    fontWeight: 'bold',
    color: '#333',
  },
  messageBlock: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000',
  },
  description: {
    color: '#666',
    fontSize: 14,
  },
  rowFront: {
    backgroundColor: '#FFF',
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: '#FFF',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
  },
  backRightBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: 75,
  },
  backRightBtnLeft: {
    backgroundColor: '#757575',
    right: 75,
  },
  backRightBtnRight: {
    backgroundColor: '#616161',
    right: 0,
  },
  backTextWhite: {
    color: '#FFF',
  },
  collapseButton: {
    padding: 10,
  },
});
