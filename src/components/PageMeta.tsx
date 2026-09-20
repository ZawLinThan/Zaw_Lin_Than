const PageMeta = ({ title, description }: { title: string; description: string }) => {
  return <>
    <title>{`${title} | Zaw Lin Than`}</title>
    <meta name="description" content={description} />
  </>
}

export default PageMeta
