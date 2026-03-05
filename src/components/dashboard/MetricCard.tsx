interface Props {
  title: string;
  value: string;
}

const MetricCard = ({ title, value }: Props) => {
  return (
    <div style={card}>
      <h4>{title}</h4>
      <h2>{value}</h2>
    </div>
  );
};

export default MetricCard;

const card = {
  background: "white",
  padding: "30px",
  borderRadius: "16px",
  boxShadow: "0 6px 18px rgba(0,0,0,0.05)"
};