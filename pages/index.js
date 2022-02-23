import MeetupList from "../components/meetups/MeetupList";

const DUMMUY_DATA = [
  {
    id: "m1",
    title: "Meetup in New York",
    image:
      "https://static5.depositphotos.com/1030296/395/i/950/depositphotos_3958211-stock-photo-new-york-cityscape-tourism-concept.jpg",
    address: "New York, 223",
    description: "New York is the most populous city in the United States.",
  },
  {
    id: "m2",
    title: "Meetup in São Paulo",
    image:
      "https://www.euandopelomundo.com/wp-content/uploads/2019/04/sao_paulo.jpg",
    address: "São Paulo, 554",
    description: "São Paulo is the most populous city in the Brazil.",
  },
];

function HomePage() {
  return <MeetupList meetups={DUMMUY_DATA} />;
}

export default HomePage;
