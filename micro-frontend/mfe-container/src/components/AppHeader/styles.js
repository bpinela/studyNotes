import styled from 'styled-components';

export const Container = styled.div`
  header {
    background-color: #e74c3c;
    width: 100%;
    
    h1 {
      font-size: 38px;
      margin: 0;

      &.title {
        padding: 1rem 3rem;
        width: 100%;
      }
    }
    nav {
      align-items: center;
      background-color: #34495e;
      display: flex;
      font-size: 20px;
      height: 60px;
      
      ol {
        counter-reset: my-awesome-counter;
        display: flex;
        /* justify-content: space-around; */
        list-style: none;
        padding: 0;
        width: 100%;

        li {
          counter-increment: my-awesome-counter;
          padding-left: 3rem;

          &::before {
            color: #FFF;
            content: counter(my-awesome-counter) ". ";
          }
        }
      }
      a {
        color: #fff;
        display: inline-block;
        padding: 4px 0;
        position: relative;
        text-decoration: none;

        &::after {
          background: none repeat scroll 0 0 transparent;
          bottom: 0;
          content: "";
          display: block;
          height: 2px;
          left: 50%;
          position: absolute;
          background: #fff;
          transition: width 0.3s ease 0s, left 0.3s ease 0s;
          width: 0;
        }
        &:hover::after { 
          left: 0;
          width: 100%;
        }
      }
    }
  }
`;
