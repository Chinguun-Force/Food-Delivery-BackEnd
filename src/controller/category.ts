// [
//     {
//       '$lookup': {
//         'from': 'foods', 
//         'localField': '_id', 
//         'foreignField': 'category', 
//         'as': 'foods'
//       }
//     }
//   ]