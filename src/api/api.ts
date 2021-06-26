import {Photo} from "../type/types";

const photoBob = 'https://upload.wikimedia.org/wikipedia/ru/thumb/3/3f/%D0%93%D1%83%D0%B1%D0%BA%D0%B0_%D0%91%D0%BE%D0%B1_%D0%BF%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D0%B0%D0%B6.png/274px-%D0%93%D1%83%D0%B1%D0%BA%D0%B0_%D0%91%D0%BE%D0%B1_%D0%BF%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D0%B0%D0%B6.png'
const photoPatrick = 'https://c0.klipartz.com/pngpicture/503/1/gratis-png-patrick-star-patrick-star-saint-patrick-s-day-paddy.png'

export type MockProfile = {
  data: {
    id: string
    name: string
    online: string
    local: string
    photo: {
      big: string | null
      small: string | null
    }
  }
}

const urlDataMap: Record<string, object> = {
  '/users/qweqwe': {
    id: 'qweqwe',
    name: 'Ole Oleg',
  },
  '/profile/user': {

  },
  '/users': [
    {
      id: '1',
      name: 'Губка Боб',
      location: 'Лагуна Парк',
      age: 17,
      online: true,
      photo: {
        big: photoBob,
        small: null
      }
    },
    {
      id: '2',
      name: 'Герри',
      location: 'Лагуна Парк',
      age: 5,
      online: true,
      photo: {
        big: photoPatrick,
        small: null
      }
    },
    {
      id: '3',
      name: 'Патрик',
      location: 'Лагуна Парк',
      age: 21,
      online: true,
      photo: {
        big: photoBob,
        small: null
      }
    },
    {
      id: '4',
      name: 'Сквидварт',
      location: 'Лагуна Парк',
      age: 29,
      online: true,
      photo: {
        big: photoBob,
        small: null
      }
    },
    {
      id: '5',
      name: 'Мистер Крабс',
      location: 'Лагуна Парк',
      age: 56,
      online: true,
      photo: {
        big: photoBob,
        small: null
      }
    },
  ],
}

const apiMockResolve = <T>(data: T, timeout = 1000) => new Promise<T>((resole) => setTimeout( () => {
  resole(data)
}, timeout));

const apiMockReject = <T>(errorMessage?: string, timeout = 1000) => new Promise<T>((resole, reject) => setTimeout( () => {
  reject(new Error(errorMessage))
}, timeout));

export const fakeApi = (url: string, errorMessage?: string) => {
  const data = urlDataMap[url];
  if (data) {
    return apiMockResolve(data)
  } else {
    return apiMockReject(errorMessage)
  }
};