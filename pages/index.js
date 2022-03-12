import { MongoClient } from "mongodb";

import MeetupList from "../components/meetups/MeetupList";

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

// export async function getServerSideProps() {
//   return {
//     props: {
//       meetups: DUMMUY_DATA,
//     },
//   };
// }

export async function getStaticProps() {
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.USERDB}:${process.env.PASSWORDDB}@mecndev.1rxjx.mongodb.net/meetups?retryWrites=true&w=majority`
  );
  const db = client.db();

  const meetupCollection = db.collection("meetups");

  const meetups = await meetupCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meet) => ({
        id: meet._id.toString(),
        title: meet.title,
        image: meet.image,
        address: meet.address,
      })),
    },
    revalidate: 10,
  };
}

export default HomePage;
