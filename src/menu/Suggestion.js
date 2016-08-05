// /**
//  * Created by cw on 16/7/31.
//  */
// import React,{Component} from 'react';
// import {Text, View, StyleSheet} from 'react-native';
// import Button from '../component/Button';
// const Realm = require('realm');
//
//
// export default class Suggestion extends Component{
//     // 构造
//     constructor(props) {
//         super(props);
//         // 初始状态
//         this.state = {};
//     }
//     render(){
//         const CarSchema = {
//             name:'Car',
//             primaryKey:'id',
//             properties:{
//                 id:'int',
//                 name:'string',
//                 price:'int',
//             }
//         };
//         //初始化Realm
//         let realm = new Realm({schema:[CarSchema]});
//
//         return(
//             <View>
//                 <Button text="增" onPress={()=>{
//                     realm.write(()=>{
//                         realm.create('Car',{id:1,name:"奔驰c200l",price:40});
//                         realm.create('Car',{id:2,name:"宝马520li",price:45});
//                         realm.create('Car',{id:3,name:"奥迪A4L",price:35});
//                     });
//                 }}/>
//                 <Button text="删" onPress={()=>{
//                     realm.write(()=>{
//                         let cars = realm.objects('Car');
//                         let car = cars.filtered('id==3');
//                         realm.delete(car);
//                     })
//                 }}/>
//                 <Button text="改" onPress={()=>{
//                     realm.write(()=>{
//                         realm.create('Car',{id:3,price:30},true);
//                     })
//                 }}/>
//                 <Button text="查" onPress={()=>{
//                     let cars = realm.objects('Car');
//                     console.log(cars.length);
//                     let car = realm.filtered('id==2');
//                     console.log(car.name);
//                     let car = realm.filtered('name BEGINWITH "奔"');
//                 }}/>
//             </View>
//         );
//     }
// }
//
// const styles = StyleSheet.create({
//    container:{
//        flexDirection:'row',
//        marginTop:40,
//        marginLeft:20,
//    }
// });