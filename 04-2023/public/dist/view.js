// function handleListGenerator() {
//     console.log("test");
//     try {
//       fetch("/api/users/get-users")
//         .then((res) => res.json())
//         .then(({ users }) => {
//           try {
//             if (!users) throw new Error("didnt find list");
//             console.log(users);
//             renderUsers(users);
//           } catch (error) {
//             console.error(error);
//           }
//         });
//     } catch (error) {
//       console.error(error);
//     }
//   }
