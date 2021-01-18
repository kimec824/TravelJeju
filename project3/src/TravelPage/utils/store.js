const cards = [
    {
      id: 'card-1',
      title: 'Learning how to cook',
      sub: 'subtitle',
    },
    {
      id: 'card-2',
      title: 'Making sandwich',
      sub: 'subtitle',
    },
    {
      id: 'card-3',
      title: 'Taking the trash out',
      sub: 'subtitle',
    },
  ];
  
  const data = {
    lists: {
      'list-1': {
        id: 'list-1',
        title: 'Todo',
        cards : [] ,
      },
      'list-2': {
        id: 'list-2',
        title: 'Doing',
        cards : []
      },
    },
    listIds: ['list-1', 'list-2'],
  };
  
  export default data;