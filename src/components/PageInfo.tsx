
export default function PageInfo({info, styles}:{info:any, styles:any}) {
  const {description, title, termsOfService, contact:{email}, license:{name, url} } = info
  return (
    <div className="grid place-items-center">
      <div className={styles.description}>
        <h1 className="mb-6 text-5xl font-bold text-center">{title}</h1>
        <p>{description}</p>
      </div>
      <a href={termsOfService}>Terms of Service</a>
      <a href={email}>Contact</a>
      <a href={url}>{name}</a>
    </div>    
  )
}