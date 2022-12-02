type Props = {
  symbol: string
  label: string
}
export const Emoji = ({ symbol, label }: Props) => (
  <span role="img" aria-label={label} title={label}>
    {symbol}
  </span>
)
