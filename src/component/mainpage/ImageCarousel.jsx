import { Carousel } from 'react-bootstrap';
import styled from 'styled-components';

export default function ImageCarousel() {
  const images = [
    'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fc05187ad-abed-48aa-ba6d-cbd6bfd87ea3%2FUntitled.png?table=block&id=d97f263b-a71c-461e-aa11-d3c501cee40c&spaceId=09467b45-69a1-481a-b1c7-77297fa812d3&width=2000&userId=76a04d61-16d6-4090-a679-00a93238c8cc&cache=v2',
    'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F5603d572-6bc6-4aa8-8388-e62cf94f9047%2F%EC%A2%83%EB%90%A0%EA%B2%8C.png?table=block&id=a2623d43-2f29-4ab7-8515-53aab9a93011&spaceId=09467b45-69a1-481a-b1c7-77297fa812d3&width=1810&userId=76a04d61-16d6-4090-a679-00a93238c8cc&cache=v2',
    'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F2376b286-49db-4802-9044-e0fcf3564b4a%2F7f2837b128150e020261361ce375035c1962338a.jpg?table=block&id=a0675bbe-349b-4ed1-8bd2-e399e32e54c7&spaceId=09467b45-69a1-481a-b1c7-77297fa812d3&width=1440&userId=76a04d61-16d6-4090-a679-00a93238c8cc&cache=v2',
    'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fb1081372-ddef-42ac-a75c-139027eb3dea%2FCD6C60B2-6812-41D9-9B64-027F8A1D07F9.jpeg?table=block&id=76435676-21a9-4d0d-a916-83feb27f80a7&spaceId=09467b45-69a1-481a-b1c7-77297fa812d3&width=1440&userId=76a04d61-16d6-4090-a679-00a93238c8cc&cache=v2',
    'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fcd38a3c6-7fb5-4b2a-bb5e-77172a2bb70e%2F8856AD3B-2D4F-4171-A21E-C6DDD87E9E83.jpeg?table=block&id=45b518d9-fa79-4ce7-83a8-cd3325cfbbde&spaceId=09467b45-69a1-481a-b1c7-77297fa812d3&width=1210&userId=76a04d61-16d6-4090-a679-00a93238c8cc&cache=v2',
  ];
  return (
    <Carousel>
      {images.map((image, idx) => (
        <Carousel.Item interval={2000} key={idx}>
          <StImageWrapper>
            <img src={image} alt="hot meme" />
          </StImageWrapper>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
const StImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  & > img {
    height: 400px;
    object-fit: cover;
    border-radius: 10px;
    overflow: hidden;
  }
`;
