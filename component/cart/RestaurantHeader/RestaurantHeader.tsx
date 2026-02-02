interface RestaurantHeaderProps {
  name: string;
}

export default function RestaurantHeader({ name }: RestaurantHeaderProps) {
  return (
    <div className="restaurant-header">
      <h3>{name}</h3>
    </div>
  );
}
