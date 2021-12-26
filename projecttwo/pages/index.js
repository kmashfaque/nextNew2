import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../helpers/api-utils";

function HomePage(props) {
  return (
    <>
      <EventList items={props.events} />
    </>
  );
}

export async function getStaticProps(context) {
  const feasuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: feasuredEvents,
    },
    revalidate: 1800,
  };
}
export default HomePage;
