import { StyleSheet } from "react-native";
import Colors from "../assets/Colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    paddingTop: 10,
    paddingHorizontal: 10
  },
  listContainer: {
    padding: 10,
  },
  card: {
    flexDirection: 'row',
    marginVertical: 10,
    backgroundColor: Colors.blackSecondary,
    borderRadius: 10,
    alignItems: 'center',
  },
  cardText: {
    fontFamily: 'Kanit-Regular',
    fontSize: 30,
    color: Colors.white,
  },
  categoryText: {
    fontFamily: 'Kanit-Medium',
    color: Colors.white,
    fontSize: 20,
    backgroundColor: Colors.whiteWithMoreOpacity,
    borderRadius: 5,
    padding: 4,
    alignSelf: 'flex-start',
  },
  textContainer: {
    marginLeft: 15,
  },
  image: {
    width: 150,
    height: 150,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
});