import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from "next";

export function getServerSideProps(context: GetServerSidePropsContext) {
  const topic = context.params?.["topic"];
  const topicName = topic as string;

  return {
    props: {
      topic: topicName,
    },
  };
}

const TutorialPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ topic }) => {
  return <></>;
};

export default TutorialPage;
