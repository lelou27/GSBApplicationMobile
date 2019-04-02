import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 18,
        paddingHorizontal: 5
    },
    menuIcon: {
        zIndex: 9,
        position: 'absolute',
        top: 30,
        left: 20,
    },
    listViewPraticien: {
      marginTop: 60,
    },
    linePraticien: {
      backgroundColor: '#FFF',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,0.25)',
        marginVertical: 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textPraticien: {
      paddingHorizontal: 20,
    },
    IconView: {
        paddingRight: 20
    },

    viewLineDepartmentPraticien: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#a2273C',
        marginVertical: 10,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'stretch',
        paddingHorizontal: 5
    },
    oneTextDepartement: {
        padding: 5
    },
    underViewOneCollab: {
        padding: 5,
        marginHorizontal: 5
    }
})