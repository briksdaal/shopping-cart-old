export default function SingleIcon({ iconComp, url }) {
  return (
    <a href={url}>
      <iconComp />
    </a>
  );
}
