// catch all route for documentation type of website
// /docs/routing/catch-all-segments

/**
 * [[..slug]] : optional catch all segments
 * used when there are no nested paths i.e. /docs
 *
 * */

export default async function Docs({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  if (slug?.length === 2) {
    return (
      <h2>
        Viewing docs for feature <b>{slug[0]}</b> and concept <b>{slug[1]}</b>
      </h2>
    );
  } else if (slug?.length === 1) {
    return (
      <h2>
        Viewing docs for feature <b>{slug[0]}</b>
      </h2>
    );
  }
  // for optional route
  return <div>Docs home page</div>;
}
