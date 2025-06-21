import { AiFillCheckCircle } from "react-icons/ai";
import { AiOutlineSafety, AiOutlineCreditCard } from "react-icons/ai";
import { AiOutlineCode } from "react-icons/ai";
import { AiOutlineLayout } from "react-icons/ai";
import { AiOutlineDatabase } from "react-icons/ai";

const featuresItems = [
  {
    icon: <AiOutlineCode className="text-4xl text-primary" />,
    title: "Запись онлайн",
    description: "Выбирайте автосалон, дату и время визита прямо в приложении."
  },
  {
    icon: <AiOutlineLayout className="text-4xl text-primary" />,
    title: "Удобный интерфейс",
    description: "Интуитивный дизайн, который легко освоить с первого экрана."
  },
  {
    icon: <AiOutlineDatabase className="text-4xl text-primary" />,
    title: "База салонов",
    description: "Актуальный список автосалонов с рейтингами и отзывами."
  },
  {
    icon: <AiFillCheckCircle className="text-4xl text-primary" />,
    title: "Подтверждение записи",
    description: "Мгновенное подтверждение и напоминания о визите."
  },
  {
    icon: <AiOutlineSafety className="text-4xl text-primary" />,
    title: "Надёжность и безопасность",
    description: "Ваши данные шифруются и не передаются третьим лицам."
  },
  {
    icon: <AiOutlineCreditCard className="text-4xl text-primary" />,
    title: "Онлайн-оплата",
    description: "Оплачивайте услуги заранее с помощью СПБ."
  }
];

export default featuresItems;
