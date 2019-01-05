$('body *').replaceText(/\[(b|i|u|s|center)?\](.*?)\[\/\1?\]/gi, '<$1>$2</$1>' );
