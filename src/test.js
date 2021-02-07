const test = [{ title: 'aab' }, { title: 'bab' }, { title: 'acb' }];

  function orderAlphabetically(movies) {
    const movies2 = [...movies];
    const movies2Title = movies2.map((toto) => {
      return toto.title;
    });
    return movies2Title.sort((titi, tutu) => titi.localeCompare(tutu)).splice(0, 20);
  }

  console.log("Result: "+orderAlphabetically(test));